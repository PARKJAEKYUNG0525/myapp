# **-웹 인터페이스 개발 실습까지-**

<img width="410" height="349" alt="image" src="https://github.com/user-attachments/assets/bbd6db74-c05e-4cc0-8778-4a4faa5e6432" />
myapp

<img width="366" height="236" alt="image" src="https://github.com/user-attachments/assets/ab12712c-f818-44ca-8e47-d6de6dee382f" />
myapp2


vite

- vue 창시자가 만든 빌드 도구
- CRA 보다 빠른 속도 제공

## React 초기 설정

Node.js 설치

- node -v
- npm -v

cmd 확인

터미널 

mkdir ~/workspace-react 

npm create vite@latest myapp -- --template react  // VsCode 터미널 이슈 문제로 cmd에서 직접 다운

(Cursor 터미널에서 & "C:\Program Files\nodejs\npm.cmd" run dev 실행 가능)

**`package.json`이 있는 프로젝트 폴더 안에서만** 실행가능하기 때문

cd myapp → npm install, npm run dev

![image.png](attachment:242e53d4-e8b4-495e-8ac8-bcc64fb82b42:image.png)

public : 필요한 정보, 페이지 정보 저장(폰트 등등)

src : 가장많이 사용하는 폴더 (컴포넌트,이미지)

.gitignore : git에서 업로드 하면 안될것들이 명시되어있음

## TodoList 실습

---

**##Todo 앱 실습 프로젝트**

실무에서 활용 가능한 Todo 앱을 만들어보며 컴포넌트 설게와 상태관리를 종합적으로 학습합니다.

CRUD 기능을 통해 데이터 관리 방법을 익히고, 컴포넌트 간 상호작용을 이해합니다.

**##Todo 앱 기능 요구사항 :**

- 할 일 추가 (Create)
- 할 일 목록 보기 (Read)
- 할 일 완료/미완료 토글 (Update)
- 할 일 삭제 (Delete)
- 전체/완료/미완료 필터링
- 전체 할 일 개수 표시

CRUD

create(생성) Read(조회) Update(수정) Delete(삭제)

**## 단계별 실습**

- 1 단계 : 기본 Todo 입력과 목록 표시 기능 구현
- 2단계 : 완료/ 미완료 토글과 삭제 기능 추가
- 3단계 : 필터링 기능과 통계 정보 표시 추가
- 4단계 : 컴포넌트 분리

**## 주요 학습 내용 정리** 

- 컴포넌트 설계 원칙 : 단일 책임, 재사용성, 명확한 인터페이스
- State Lifting : 공유 상태를 부모 컴포넌트로 끌어올리기
- CRUD 작업 : 데이터 생성, 읽기, 수정 , 삭제 기능 구현
- 이벤트 처리 : 사용자 상호작용에 따른 상태 업데이트
- 조건부 렌더링 : 상태에 따른 동적 UI 표시

![image.png](attachment:0cc43875-e408-40c3-9884-66841731fdb6:image.png)

- `inputValue` → 현재 입력값 (상태 값)
- `setInputValue` → 그 값을 바꾸는 함수
- `useState('')` → 초기값을 빈 문자열로 설정

`onChange={(e) => setInputValue(e.target.value)}`

- 이벤트 객체 `e`가 발생하고
- `e.target.value` = 현재 입력된 텍스트
- 그 값을 `setInputValue`로 상태에 저장합니다.

## DB

Supabase 사용 → **React, Next.js 같은 프론트엔드 프로젝트에서 Firebase처럼 많이 쓰이는 백엔드 서비스**예요. 쉽게 말하면 **DB + 인증 + API를 바로 제공해주는 풀스택 툴**

터미널에서 설치 : npm install @supabase/supabase-js

테이블 만들어서 데이터삽입 → 조회 가능

API Docs 에서 todos(테이블 이름) 들어가서 필요 코드 가져오기

정책 이슈로  Create policy 해서 만들어서 해야함 → using true 입력

![image.png](attachment:5a0361e9-835b-42ae-bea2-b036c548ac84:image.png)

결과물

![image.png](attachment:892e4e4b-1a31-4523-ad3e-611e14bdd465:image.png)

데이터베이스 확인 (Supabase)

![image.png](attachment:8b1a5bd7-282e-44fa-8b88-bc2fb33d723d:image.png)
