# CLAUDE.md — Judy Lee · Product Designer Portfolio

> AI가 이 레포에서 작업할 때 매번 읽는 컨텍스트.
> 포지셔닝 · 톤 · 의사결정 기준은 여기 기준으로 판단한다.

---

## 🔗 작업 전에 먼저 참조할 문서

외부 플레이북(옵시디언)에 상세 가이드가 있어요. 작업 유형별로 필요할 때 Read로 열어보세요.

| 작업 유형 | 먼저 읽을 문서 |
|---|---|
| 이미지 교체 · 텍스트 수정 · 배포 | `/Users/judy/Desktop/obsi/judy_designer/04_리소스/구직-플레이북/6_운영-가이드.md` |
| 새 케이스스터디 작성 | `/Users/judy/Desktop/obsi/judy_designer/04_리소스/구직-플레이북/4_케이스스터디-프레임워크.md` |
| 문장 다듬기 · 번역 | `/Users/judy/Desktop/obsi/judy_designer/04_리소스/구직-플레이북/5_톤-가이드.md` |
| 전체 구직 상황 파악 | `/Users/judy/Desktop/obsi/judy_designer/04_리소스/구직-플레이북/index.md` |

**원칙**: 작업 시작 전에 관련 문서 1개만 Read로 열고 규칙 따라 작업.

---

## 프로젝트 개요

| 항목 | 내용 |
|---|---|
| 목적 | 이지현(Judy Lee)의 포트폴리오 웹사이트 · **Product Designer 포지셔닝** |
| 타겟 | 빅테크·AI 스타트업 채용담당자 · PD · AX 지향 |
| 스택 | Next.js 16 · TypeScript · Tailwind 4 · Framer Motion · MDX |
| 스타일 방향 | Minimal Editorial Light · 타이포그래피 중심 |
| 폰트 | Plus Jakarta Sans (영문) · Pretendard (한글) |
| 배포 | GitHub · Vercel |

---

## 파일 구조

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx                      · 전역 레이아웃 (Nav + Footer)
│   │   ├── page.tsx                        · 홈 (Hero + Impact + Projects)
│   │   ├── globals.css                     · 디자인 토큰 + Tailwind 4 @theme
│   │   ├── about/page.tsx                  · About
│   │   └── work/
│   │       ├── layout.tsx                  · 케이스스터디 공통 레이아웃
│   │       ├── samsung-engagement/
│   │       │   ├── page.tsx                · 케이스 스캐폴드
│   │       │   └── content.mdx             · 케이스 본문
│   │       ├── big-black-bag/
│   │       └── ptkorea/
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ImpactStrip.tsx
│   │   ├── ProjectCard.tsx
│   │   └── CaseStudyHero.tsx
│   ├── lib/
│   │   └── projects.ts                     · 프로젝트 데이터 (단일 소스)
│   └── mdx-components.tsx                  · MDX 태그별 스타일 (h1, p 등)
├── next.config.ts                          · MDX 설정
├── tsconfig.json
└── package.json
```

---

## 포지셔닝 핵심

**Hero 카피**
> I spent 8 years designing what things look like.
> *Now I design how they work.*

**Sub**
> Product designer with craft DNA from Samsung and Edelman · building AI-native product experiences with measurable impact.

**라벨**
> Product Designer · Brand to Product · AI-Native

**Impact 4개**
- 62% ↑ · Task completion · Samsung.com
- 33% ↑ · Customer satisfaction · Samsung.com
- 46% · Live kiosk completion · Winners BBB
- 8 yrs · Design practice · brand to product

---

## 현재 프로젝트 (projects.ts 기준)

| 순서 | ID | 제목 | 상태 |
|---|---|---|---|
| 01 | `samsung-engagement` | Samsung.com · Redesign | visible |
| 02 | `big-black-bag` | Winners Big Black Bag | visible |
| 03 | `ptkorea` | PTKorea · Rebranding | visible |

---

## 디자인 토큰 (globals.css)

### 컬러
| 변수 | 값 | 용도 |
|---|---|---|
| `--color-bg` | `#ffffff` | 배경 |
| `--color-bg-subtle` | `#f7f7f7` | 서브 배경 |
| `--color-text-primary` | `#1a1a1a` | 본문 |
| `--color-text-secondary` | `#898989` | 보조 텍스트 |
| `--color-text-tertiary` | `#b8b8b8` | 캡션 |
| `--color-border` | `#e8e8e8` | 선 |

### 타이포그래피
| 변수 | 값 | 용도 |
|---|---|---|
| `--text-display` | clamp(36~56px) | 히어로 타이틀 |
| `--text-h1` | clamp(24~36px) | 섹션 타이틀 |
| `--text-h2` | 20px | 서브 타이틀 |
| `--text-body` | 16px | 본문 |
| `--text-small` | 14px | 네비·레이블 |
| `--text-caption` | 12px | 캡션 |

### 스페이싱
`--space-1` (4px) → `--space-10` (120px)

---

## 작업 규칙

### 언어 & 톤
- AI 대화: 한국어 기본 · 디자인·개발 용어만 영어
- 결과물 (HTML·MDX 콘텐츠): 영어 · 전문 Product Design 용어
- 코드 주석: 한국어 OK
- 톤: Confident · Professional · Authentic
- **엠대시(—) 사용 금지** · 구분자는 `·` (middle dot)

### 코드
- CSS 변수만 사용 · 값 하드코딩 금지
- 새 변수 필요하면 `globals.css`에 추가 후 사용
- 프로젝트 정보는 `projects.ts`만 수정
- 컴포넌트는 `src/components/`에
- MDX 케이스는 `src/app/work/[slug]/content.mdx`
- 파일명 kebab-case

### 절대 하지 말 것
- 묻지 않고 기능·아이디어 추가
- 요청 범위 밖 리팩터링
- 엠대시, "당신", 클리셰 사용

---

## v0.1 상태

- [x] Next.js 프로젝트 세팅
- [x] 디자인 토큰 이관
- [x] 홈 · About 페이지
- [x] 3개 케이스스터디 (Samsung · BBB · PTKorea)
- [ ] 프로젝트 썸네일 이미지 (현재 텍스트 플레이스홀더)
- [ ] 각 케이스스터디 내부 이미지
- [ ] GitHub push
- [ ] Vercel 배포

---

## v0.5 · v1.0 계획

| 버전 | 시기 | 추가 |
|---|---|---|
| v0.5 | 5/23 | AI Workflow Meta 케이스 (본인 옵시디언+Claude 파이프라인) |
| v1.0 | 6/27 | AI Agent Manager UX 케이스 (가상 제품) |
| v1.1 | 7/25 | 데이터 시각화 또는 엔터프라이즈 케이스 (선택) |

---

## 로컬 실행

```bash
cd portfolio
npm run dev      # → http://localhost:3000
npm run build    # 프로덕션 빌드 테스트
```

---

## 이지현 컨텍스트

- **직군:** Product Designer (그래픽 디자이너 출신)
- **지향:** AX (AI Experience) 디자이너
- **강점:** 비주얼 감각 · 문제정의 집요함 · 시스템 씽킹
- **현재:** 구직 중 · 빅테크 타겟
- **전략:** 임팩트와 문제해결을 앞세워 북미 테크 마켓 타겟
