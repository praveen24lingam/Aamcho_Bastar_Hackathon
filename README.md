<div align="center">

<img src="assets/logo.png" alt="Aamcho Bastar Logo" width="120" height="120" />

# 🌿 Aamcho Bastar

### *Connect. Explore. Experience.*

**A modern community platform for tourists and residents of Bastar — connecting travelers with local agents, cultural experiences, and essential services.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Site-4CAF50?style=for-the-badge)](https://yourdomain.com)
[![License](https://img.shields.io/badge/License-Open_Source-blue?style=for-the-badge)](LICENSE)

</div>

---

## 📸 Preview

<div align="center">
<table>
  <tr>
    <td align="center"><b>🌙 Dark Mode</b></td>
    <td align="center"><b>☀️ Light Mode</b></td>
  </tr>
  <tr>
    <td><img src="assets/preview-dark.png" alt="Dark Mode Preview" width="400"/></td>
    <td><img src="assets/preview-light.png" alt="Light Mode Preview" width="400"/></td>
  </tr>
</table>
</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Database Schema](#-database-schema)
- [Authentication Model](#-authentication-model)
- [User Roles](#-user-roles)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌍 About

**Aamcho Bastar** (meaning *"Our Bastar"* in Chhattisgarhi) is a full-featured community web platform designed to bridge the gap between tourists, local residents, and service providers in the Bastar region of Chhattisgarh, India.

Whether you're a traveler looking to explore tribal culture, forests, and waterfalls — or a local agent offering guided tours and services — this platform provides a seamless, modern experience for both.

> Built with zero backend server costs using **Supabase** — just deploy the static files and go.

---

## ✨ Features

### 🌐 Public (No Login Required)
| Feature | Description |
|---|---|
| 🏞️ Explore Places | Browse tourist spots, attractions, and local listings |
| 🎉 Festivals & Gallery | View cultural festivals and photo gallery |
| 🚌 Transport Info | Find transport options and routes |
| 🌓 Dark / Light Mode | Persistent theme preference |
| 🌐 Hindi / English Toggle | Bilingual interface support |

### 🔒 Authenticated Users
| Feature | Description |
|---|---|
| 📋 Submit Complaints | Report issues and track their status |
| 💬 Submit Feedback | Rate and review your experiences |
| 🤝 Connect with Agents | Request and manage agent connections |
| 📅 Trip Bookings | Plan and manage travel bookings |
| 🔔 Notifications | Real-time activity and notification log |
| 👤 Profile Management | Update info, change password, delete account |

### 🛡️ Agent & Admin
| Feature | Description |
|---|---|
| 🧑‍💼 Agent Dashboard | Manage incoming requests and connections |
| ✅ Admin Approval Flow | Server-side agent approval via Supabase RPC |
| 🔐 Role-Based Access | RLS policies enforce data boundaries |

---

## 🛠️ Tech Stack

```
Frontend     →  HTML5 · CSS3 · Vanilla JavaScript (ES6+)
Backend      →  Supabase (PostgreSQL · Auth · Storage · Realtime)
Security     →  Row-Level Security (RLS) · Email Verification · Session Tokens
Design       →  Glass Morphism UI · CSS Variables · Mobile-First
Fonts        →  Google Fonts (Inter)
```

**No frameworks. No build tools. No npm required for basic usage.** Just open and run.

---

## 📁 Project Structure

```
Aamcho_Bastar/
│
├── 📄 index.html                  # Landing page
├── 📄 login.html                  # Login page
├── 📄 signup.html                 # Registration (User / Agent)
├── 📄 dashboard.html              # User dashboard
├── 📄 profile.html                # Profile management
├── 📄 explore.html                # Places & listings
├── 📄 festivals.html              # Cultural festivals
├── 📄 gallery.html                # Photo gallery
├── 📄 plan-trip.html              # Trip planner
├── 📄 agents.html                 # Agent listings
├── 📄 agent-dashboard.html        # Agent management portal
├── 📄 contact.html                # Contact & support
├── 📄 help.html                   # Help center
├── 📄 404.html                    # Error page
│
├── 🗄️ database-schema.sql         # Full DB schema + RLS policies
│
├── css/
│   ├── style.css                  # Global styles
│   └── landing.css                # Landing page styles
│
├── js/
│   ├── auth.js                    # ⚙️ Supabase config + Auth logic
│   ├── dashboard.js               # Dashboard functionality
│   ├── profile.js                 # Profile management
│   ├── explore.js                 # Places & listings
│   ├── agents.js                  # Agent listings
│   ├── agent-dashboard.js         # Agent portal logic
│   ├── admin-agent.js             # Admin approval flows
│   ├── components.js              # Shared UI components
│   └── main.js                    # Theme, language, utilities
│
└── assets/                        # Images, icons, media
```

---

## 🚀 Getting Started

### Prerequisites

- A [Supabase](https://supabase.com) account (free tier works)
- Any local web server (VS Code Live Server, Python, or Node.js)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/Aamcho_Bastar.git
cd Aamcho_Bastar
```

### 2. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) → **New Project**
2. Navigate to **Settings → API**
3. Copy your **Project URL** and **Anon/Public Key**

### 3. Configure Credentials

Open `js/auth.js` and replace the placeholder values:

```javascript
// js/auth.js  →  Lines 7–8
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

### 4. Set Up the Database

1. In Supabase, open **SQL Editor**
2. Copy the contents of `database-schema.sql`
3. Paste and click **Run**
4. Verify tables in **Table Editor**:
   - `profiles` · `complaints` · `feedback` · `agent_requests`
   - `bookings` · `notifications` · `activity_log` · `agent_connections`

### 5. Configure Authentication

1. Go to **Authentication → Providers** → Enable **Email**
2. Go to **Authentication → URL Configuration**
   - **Site URL**: `http://localhost:5500` *(local)* or your domain *(production)*
   - **Redirect URLs**: `http://localhost:5500/**`

### 6. Run the Project

<details>
<summary><b>Option A — VS Code Live Server</b></summary>

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

</details>

<details>
<summary><b>Option B — Python</b></summary>

```bash
python -m http.server 8000
# Open: http://localhost:8000
```

</details>

<details>
<summary><b>Option C — Node.js</b></summary>

```bash
npm install -g http-server
http-server -p 8000
# Open: http://localhost:8000
```

</details>

---

## 🗄️ Database Schema

<details>
<summary><b>Click to expand table definitions</b></summary>

| Table | Key Columns |
|---|---|
| `profiles` | `id`, `full_name`, `user_type` (user/agent), `avatar_url`, `is_verified` |
| `complaints` | `id`, `user_id`, `title`, `description`, `status` (pending/resolved) |
| `feedback` | `id`, `user_id`, `message`, `rating` (1–5) |
| `agent_requests` | `id`, `user_id`, `message`, `status` (pending/approved/rejected/completed) |
| `agent_connections` | `id`, `user_id`, `agent_id`, `request_id`, `status` |
| `bookings` | `id`, `user_id`, `details`, `status`, booking lifecycle fields |
| `notifications` | `id`, `user_id`, `message`, `is_read` |
| `activity_log` | `id`, `user_id`, `action`, `created_at` |

All tables are protected with **Row-Level Security (RLS)** — users can only access their own records.

</details>

---

## 🔐 Authentication Model

This platform uses a **Public-First** architecture:

```
┌─────────────────────────────────────────────────────┐
│  PUBLIC (No Login Required)                          │
│  Landing · Explore · Festivals · Gallery · Transport │
└─────────────────────────────────────────────────────┘
                          │
                          ▼ (action triggered)
┌─────────────────────────────────────────────────────┐
│  PROTECTED (Login Modal Shown)                       │
│  Submit Complaint · Submit Feedback · Book Trip      │
│  Connect with Agent · Dashboard · Profile            │
└─────────────────────────────────────────────────────┘
```

**Protecting a button is as simple as:**
```html
<button data-protected-action="submit complaint">Submit Complaint</button>
```

**Checking auth status in JavaScript:**
```javascript
const { isAuthenticated, user } = await window.authFunctions.getAuthStatus();
```

---

## 👥 User Roles

| Role | Capabilities |
|---|---|
| **Guest** | Browse all public content without an account |
| **User** | Submit complaints, feedback, book trips, connect with agents |
| **Agent** | Manage incoming user requests, view agent dashboard |
| **Admin** | Approve/reject agent applications via server-side RPC |

---

## 🗺️ Roadmap

- [x] Public browsing without login
- [x] Email/password authentication
- [x] Role-based access (User / Agent)
- [x] Complaints, feedback, agent request flows
- [x] Dark/light mode + Hindi/English toggle
- [x] Admin agent approval flow
- [ ] 📸 Avatar upload via Supabase Storage
- [ ] 🔔 Real-time notifications via Supabase Realtime
- [ ] 📊 Admin analytics dashboard
- [ ] 📤 Export user data (GDPR)
- [ ] 📧 Custom email templates
- [ ] 🗺️ Interactive map integration

---

## 🐛 Troubleshooting

| Issue | Fix |
|---|---|
| `Failed to initialize Supabase` | Check credentials in `js/auth.js` |
| `Invalid email or password` | Verify signup completed + email confirmed |
| `Failed to submit complaint` | Ensure DB tables exist and RLS is configured |
| `CORS errors` | Add Site URL in Supabase Auth settings; use a web server (not `file://`) |
| `Dark mode not persisting` | Clear `localStorage` and browser cache |

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the repository
# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Commit your changes
git commit -m "feat: add your feature description"

# 4. Push and open a Pull Request
git push origin feature/your-feature-name
```

Please follow conventional commits and keep PRs focused.

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🙏 Acknowledgements

- [Supabase](https://supabase.com) — for the incredible open-source backend
- [Google Fonts](https://fonts.google.com) — for the Inter typeface
- The people and culture of **Bastar, Chhattisgarh** — for the inspiration 🌿

---

<div align="center">

**Built with ❤️ for Bastar**

⭐ If you found this project useful, please consider giving it a star!

</div>
