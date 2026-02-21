// Contact page enhancements: show platform inquiry only for logged-in users and handle submission
document.addEventListener('DOMContentLoaded', async function(){
    if (typeof window.authFunctions === 'undefined') return;
    const auth = await window.authFunctions.getAuthStatus();

    // Add platform inquiry button to the contact-right area (below Send Message form)
    const contactRight = document.querySelector('.contact-right');
    if (!contactRight) return;

    const inquiryBox = document.createElement('div');
    inquiryBox.className = 'card-box';
    inquiryBox.style.display = 'flex';
    inquiryBox.style.flexDirection = 'column';
    inquiryBox.style.gap = '12px';
    inquiryBox.innerHTML = `
        <h3 class="box-title text-orange-dark"><i class="fas fa-question-circle"></i> Platform Inquiry</h3>
        <p class="section-subtitle" style="font-size:0.95rem;color:var(--text-light);">Send an inquiry to agents via our platform.</p>
        <div id="platformInquiryArea"></div>
    `;

    contactRight.appendChild(inquiryBox);

    const area = document.getElementById('platformInquiryArea');
    if (!auth.isAuthenticated) {
        // show only call/whatsapp/email guidance
        area.innerHTML = `
            <p>Please login to use platform inquiry.</p>
            <div style="display:flex;gap:8px;margin-top:8px;">
                <a class="btn btn-outline-dark" href="tel:+917782223344"><i class="fas fa-phone"></i> Call Now</a>
                <a class="btn btn-outline-dark" href="https://wa.me/917782223344"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                <a class="btn btn-outline-dark" href="mailto:info@chalgunbebastar.com"><i class="fas fa-envelope"></i> Email</a>
            </div>
        `;
        return;
    }

    // If logged in, show a simple form to choose agent and send inquiry
    area.innerHTML = `
        <div class="form-group"><select id="selectAgent" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;"><option value="">Select Agent (optional)</option></select></div>
        <div class="form-group"><textarea id="inquiryMsg" placeholder="Your message" style="width:100%;padding:10px;border:1px solid #ddd;border-radius:8px;min-height:100px;"></textarea></div>
        <div style="display:flex;gap:8px;justify-content:flex-end;"><button id="sendInquiryBtn" class="btn btn-green">Send Inquiry</button></div>
    `;

    // populate agents select (try fetching from agents table)
    const supabase = window.supabaseClient;
    if (!supabase) return;
    try {
        const { data } = await supabase.from('agents').select('id,name,agency_name,city');
        const select = document.getElementById('selectAgent');
        if (data && data.length) {
            data.forEach(a => {
                const opt = document.createElement('option');
                opt.value = a.id;
                opt.textContent = `${a.name} — ${a.agency_name || ''} (${a.city || ''})`;
                select.appendChild(opt);
            });
        }
    } catch (err) {
        console.warn('Failed to populate agents select', err);
    }

    document.getElementById('sendInquiryBtn').addEventListener('click', async function(){
        const agentId = document.getElementById('selectAgent').value || null;
        const message = document.getElementById('inquiryMsg').value.trim();
        if (!message) return alert('Please enter a message');
        try {
            const authStatus = await window.authFunctions.getAuthStatus();
            const payload = {
                agent_id: agentId,
                message,
                status: 'pending'
            };
            if (authStatus && authStatus.isAuthenticated && authStatus.user) {
                payload.user_id = authStatus.user.id;
                payload.name = authStatus.user.user_metadata?.full_name || null;
                payload.phone = authStatus.user.user_metadata?.phone || null;
            }
            const { error } = await supabase.from('inquiries').insert([payload]);
            if (error) throw error;
            alert('Inquiry sent. Agent will be notified.');
            document.getElementById('inquiryMsg').value = '';
        } catch (err) {
            console.error(err);
            alert('Failed to send inquiry');
        }
    });
});