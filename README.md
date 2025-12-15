# Provelers
A traveler Friendly social media application, including map and challenges.




1. **Early project folder structure** (frontend + backend + infra)
2. **Team-wise responsibility mapping inside the structure**
3. **CI/CD pipeline design** (branching, jobs, environments)
4. **Complete data flow diagram explanation** (user → frontend → backend → DB → cache → realtime → back)
5. **How three people work together without conflict**



# 1. High-Level Architecture (Mental Model)

Before folders, understand the **shape of the system**:

    ```
    User Browser
    ↓
    Next.js Frontend (Vercel)
    ↓ API Calls (HTTPS)
    Node.js Backend (Express / Firebase Functions)
    ↓
    -----------------------------------
    | MySQL | Redis | Firebase | Storage |
    -----------------------------------
    ↑
    WebSocket / Firebase Realtime (Live Q&A, Chat)
    ```

Key idea:

* **Frontend never talks to DB directly**
* **Backend is the brain**
* **Redis is fast memory**
* **Firebase handles auth + realtime**

---

# 2. Monorepo Project Structure (Recommended)

Use **one repository** with clear separation. This avoids confusion and CI pain.

        ```
        provelers/
        │
        ├── apps/
        │   ├── web/                # Frontend (Next.js)
        │   └── api/                # Backend (Node.js)
        │
        ├── packages/
        │   ├── shared/             # Shared types, constants
        │   └── config/             # ESLint, TS config
        │
        ├── infra/
        │   ├── db/                 # DB migrations & seeds
        │   ├── redis/              # Cache config
        │   └── ci/                 # CI scripts
        │
        ├── docs/
        │   ├── architecture.md
        │   ├── api-contracts.md
        │   ├── db-design.md
        │   └── onboarding.md
        │
        ├── .github/
        │   └── workflows/          # CI/CD pipelines
        │
        ├── .env.example
        ├── package.json
        ├── turbo.json              # If using Turborepo
        └── README.md
        ```

        This structure scales and is **thesis-defense safe**.

        ---

# 3. Frontend Structure (web)

        ```
        web/
        │
        ├── src/
        │   ├── app/                        # Next.js App Router
        │   │   ├── (auth)/
        │   │   │   ├── login/
        │   │   │   └── register/
        │   │   │
        │   │   ├── map/
        │   │   │   ├── page.tsx
        │   │   │   └── components/
        │   │   │       ├── MapView.tsx
        │   │   │       ├── PlaceMarker.tsx
        │   │   │       └── Filters.tsx
        │   │   │
        │   │   ├── trips/
        │   │   ├── qna/
        │   │   ├── chat/
        │   │   ├── profile/
        │   │   └── leaderboard/
        │   │
        │   ├── components/
        │   │   ├── ui/                      # Buttons, Modals
        │   │   ├── layout/                  # Navbar, Footer
        │   │   └── forms/
        │   │
        │   ├── services/
        │   │   ├── api.ts                   # Axios wrapper
        │   │   ├── auth.service.ts
        │   │   ├── place.service.ts
        │   │   ├── trip.service.ts
        │   │   └── qna.service.ts
        │   │
        │   ├── hooks/
        │   ├── store/                       # Zustand / Redux
        │   ├── utils/
        │   ├── types/
        │   └── styles/
        │
        ├── public/
        ├── tests/
        └── next.config.js
        ```

### Frontend Ownership

* **Aslam** → UI, pages, UX, map UI, Q&A UI, trip UI
* **Anjon** → map logic, API integration, testing, documentation

---

# 4. Backend Structure (apps/api)

        ```
        apps/api/
        │
        ├── src/
        │   ├── app.ts                 # Express bootstrap
        │   ├── server.ts
        │
        │   ├── config/
        │   │   ├── env.ts
        │   │   ├── db.ts
        │   │   ├── redis.ts
        │   │   └── firebase.ts
        │
        │   ├── modules/
        │   │   ├── auth/
        │   │   │   ├── auth.controller.ts
        │   │   │   ├── auth.service.ts
        │   │   │   └── auth.routes.ts
        │   │   │
        │   │   ├── users/
        │   │   ├── places/
        │   │   ├── trips/
        │   │   ├── qna/
        │   │   ├── chat/
        │   │   ├── gamification/
        │   │   └── notifications/
        │
        │   ├── middlewares/
        │   │   ├── auth.middleware.ts
        │   │   ├── rate-limit.ts
        │   │   └── error-handler.ts
        │
        │   ├── jobs/
        │   │   ├── leaderboard.job.ts
        │   │   └── cleanup.job.ts
        │
        │   ├── sockets/
        │   │   └── chat.socket.ts
        │
        │   ├── utils/
        │   └── types/
        │
        ├── prisma/ or migrations/
        ├── tests/
        └── package.json
        ```

### Backend Ownership

* **Arif** → full backend structure, APIs, DB, cache, sockets
* **Anjon** → DB schema validation, API contracts review

---

# 5. Infrastructure Structure (infra)

        ```
        infra/
        │
        ├── db/
        │   ├── migrations/
        │   ├── seeds/
        │   └── schema.sql
        │
        ├── redis/
        │   └── redis.conf
        │
        ├── ci/
        │   ├── test.sh
        │   ├── lint.sh
        │   └── build.sh
        ```

        ---

# 6. Git Strategy for 3 People (Very Important)

### Branches

```
main        → production
develop     → integration branch
feature/*   → per feature
```

### Example

* `feature/map-ui` → Aslam
* `feature/map-backend` → Anjon
* `feature/db-schema` → Arif

### Rules

* No direct push to `main`
* PR required to `develop`
* CI must pass before merge

---

# 7. CI/CD Pipeline (GitHub Actions)

## 7.1 Pipeline Stages

        ```
        Code Push
        ↓
        Lint & Type Check
        ↓
        Unit Tests
        ↓
        Build
        ↓
        Deploy (if develop or main)
        ```

        ---

## 7.2 CI Pipeline (Pull Request)

`.github/workflows/ci.yml`

        ```
        on:
        pull_request:
            branches: [develop]

        jobs:
        test:
            runs-on: ubuntu-latest
            steps:
            - checkout
            - install deps
            - lint
            - test
            - build
        ```

### What it checks

* Frontend builds
* Backend builds
* Types are correct
* No broken imports

---

## 7.3 CD Pipeline (Deploy)

### Frontend (Vercel)

* Auto deploy from `main`
* Preview deploy from `develop`

### Backend

        ```
        on:
        push:
            branches: [main]

        jobs:
        deploy-api:
            steps:
            - build api
            - deploy firebase functions
        ```

---

# 8. Combined Data Flow Diagram (Textual)

## 8.1 User opens map

        ```
        User
        ↓
        Next.js Map Page
        ↓
        GET /places?lat,lng
        ↓
        API Controller
        ↓
        Redis Cache
        ↓ (miss)
        MySQL (places, categories)
        ↓
        API Response
        ↓
        Frontend renders Mapbox markers
        ```

---

## 8.2 Live Q&A Message

        ```
        User types message
        ↓
        Frontend WebSocket
        ↓
        Chat Socket Server
        ↓
        Save to MySQL
        ↓
        Emit to Firebase Realtime
        ↓
        Other users receive instantly
        ```

---

## 8.3 Rank Update Flow

        ```
        User uploads photo
        ↓
        API saves file
        ↓
        points_ledger +15
        ↓
        user_profiles.rank_points += 15
        ↓
        Check badges
        ↓
        Send notification
        ```

---

# 9. Combined Team Workflow Diagram

        ```
        Arif (Design + Docs)
        ↓
        Aslam (UI + UX)
        ↓
        Anjon (API + DB)
        ↓
        CI Pipeline
        ↓
        Beta Deploy
        ```

Everyone touches **design, code, and testing** but owns different layers.

---

# 10. Early Development Order (Week 1–4)

### Week 1

* Repo setup
* CI pipeline
* DB schema
* Auth

### Week 2

* Map UI
* Places API
* Redis

### Week 3

* Q&A
* Chat base
* Trip models

### Week 4

* Rank system
* Notifications
* Docs

---

# 11. Why This Will Impress our Teachers?

* Clean separation of concerns
* Real CI/CD
* Scalable architecture
* Clear team ownership
* Industry-grade data flow

This is **not a student-level setup**. This is startup-level.

---
