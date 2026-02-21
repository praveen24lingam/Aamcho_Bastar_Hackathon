// Fetch and render agents
(async function(){
    // Wait for supabase client
    let attempts = 0;
    while (typeof window.supabaseClient === 'undefined' && attempts < 50) {
        await new Promise(r=>setTimeout(r,100)); attempts++;
    }
    const supabase = window.supabaseClient;
    const container = document.getElementById('agentsList');
    if (!container) return;

    function renderEmpty(){
        container.innerHTML = '<p style="grid-column:1/-1;padding:24px;background:#fff;border-radius:12px;text-align:center;">No agents found yet.</p>';
    }

    if (!supabase) {
        container.innerHTML = '<p style="grid-column:1/-1;padding:24px;background:#fff;border-radius:12px;text-align:center;">Unable to connect to data source.</p>';
        return;
    }

    try {
        // Try to read from `agents` table (recommended). If not present, fallback to empty.
        const { data, error } = await supabase.from('agents').select('*').order('rating', { ascending: false });
        if (error) {
            console.warn('Agents query error:', error);
            renderEmpty();
            return;
        }

        if (!data || data.length === 0) {
            renderEmpty();
            return;
        }

        container.innerHTML = '';
        data.forEach(agent => {
            const card = document.createElement('div');
            card.className = 'place-card';
            card.innerHTML = `
                <div style="padding:18px;">
                    <h3 style="margin:0 0 8px 0;color:var(--dark-green);">${agent.name || 'Agent'}</h3>
                    <p style="margin:0 0 6px 0;color:var(--text-light);">${agent.agency_name || ''} • ${agent.city || ''}</p>
                    <p style="margin:8px 0 12px 0;color:var(--text-dark);font-weight:600;">Rating: ${agent.rating || 'N/A'}</p>
                    <p style="margin:0 0 12px 0;color:var(--text-light);">${agent.specialization || ''}</p>
                    <div style="display:flex;gap:8px;flex-wrap:wrap;">
                        ${agent.phone ? `<a class="btn btn-outline-dark" href="tel:${agent.phone}"><i class="fas fa-phone"></i> Call</a>` : ''}
                        ${agent.whatsapp ? `<a class="btn btn-outline-dark" href="https://wa.me/${agent.whatsapp}"><i class="fab fa-whatsapp"></i> WhatsApp</a>` : ''}
                        ${agent.email ? `<a class="btn btn-outline-dark" href="mailto:${agent.email}"><i class="fas fa-envelope"></i> Email</a>` : ''}
                        <button class="btn btn-orange inquire-btn" data-agent-id="${agent.id}">Send Inquiry</button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });

        // Hook inquire buttons
        container.querySelectorAll('.inquire-btn').forEach(btn => {
            btn.addEventListener('click', async function(){
                const agentId = this.dataset.agentId;
                // use authFunctions.requireAuthForAction to ensure logged in
                if (!window.authFunctions) return alert('Auth unavailable');
                const allowed = await window.authFunctions.requireAuthForAction('send an inquiry');
                if (!allowed) return;
                // Show a simple modal to send inquiry
                const modal = document.createElement('div');
                modal.style.position='fixed';modal.style.inset='0';modal.style.display='flex';modal.style.alignItems='center';modal.style.justifyContent='center';modal.style.background='rgba(0,0,0,0.4)';modal.style.zIndex=4000;
                modal.innerHTML = `
                    <div style="background:#fff;border-radius:12px;padding:20px;max-width:480px;width:100%;">
                        <h3 style="margin:0 0 8px 0;">Send Inquiry</h3>
                        <p style="margin:0 0 12px 0;color:var(--text-light);">Message will be sent to the agent and stored on the platform.</p>
                        <textarea id="inqMessage" placeholder="Your message" style="width:100%;height:120px;padding:10px;border:1px solid #ddd;border-radius:8px;margin-bottom:12px;"></textarea>
                        <div style="display:flex;gap:8px;justify-content:flex-end;">
                            <button id="inqCancel" class="btn btn-outline-dark">Cancel</button>
                            <button id="inqSend" class="btn btn-green">Send</button>
                        </div>
                    </div>
                `;
                document.body.appendChild(modal);
                modal.querySelector('#inqCancel').addEventListener('click', ()=> modal.remove());
                modal.querySelector('#inqSend').addEventListener('click', async ()=>{
                    const message = modal.querySelector('#inqMessage').value.trim();
                    if (!message) return alert('Please enter a message');
                    try {
                        const auth = await window.authFunctions.getAuthStatus();
                        const payload = {
                            agent_id: agentId,
                            message,
                            status: 'pending'
                        };
                        if (auth && auth.isAuthenticated && auth.user) {
                            payload.user_id = auth.user.id;
                        }
                        const { data:inq, error:inqErr } = await supabase.from('inquiries').insert([payload]);
                        if (inqErr) throw inqErr;
                        alert('Inquiry sent successfully');
                        modal.remove();
                    } catch (err) {
                        console.error(err); alert('Failed to send inquiry');
                    }
                });
            });
        });

    } catch (err) {
        console.error('Agents error', err);
        renderEmpty();
    }
})();
