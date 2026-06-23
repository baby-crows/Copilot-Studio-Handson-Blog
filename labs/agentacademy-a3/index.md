---
layout: lab
title: "A3 · 멀티 에이전트"
summary: "Child Agent vs Connected Agent — 확장 가능한 멀티 에이전트 아키텍처 설계."
module: "AgentAcademy — 커스텀 에이전트 초급"
module_id: agentacademy
level: 300
time: "40분"
audience: "중급 Maker"
accent: "#0078D4"
tags: ["Multi-Agent", "Architecture"]
prev_url: /labs/agentacademy-a2/
prev_title: "A2 · 에이전트 모델 이해"
next_url: /labs/agentacademy-a4/
next_title: "A4 · MCP 서버 연결"
source_url: "https://github.com/baby-crows/Copilot-Studio-Hands-on/blob/main/AgentAcademy/A3%20%EB%A9%80%ED%8B%B0%20%EC%97%90%EC%9D%B4%EC%A0%84%ED%8A%B8.md"
---



# 1. 목표

1.  **Child Agent** vs **Connected Agent** 사용 시점 이해
2.  확장 가능한 **멀티 에이전트 아키텍처 설계**
3.  특정 작업을 위한 **Child Agent 생성**
4.  에이전트 간 **통신 패턴 설계**


오늘은 채용 에이전트(Hiring Agent)를 멀티 에이전트 시스템으로 확장하여, 여러 전문 에이전트가 협력해 복잡한 채용 프로세스를 처리할 수 있도록 합니다. 

추가할 두 가지 핵심 에이전트:

*   **Application Intake Agent**: 이력서 자동 처리
*   **Interview Prep Agent**: 인터뷰 자료 생성

# 2. 배경 지식

## 2.1. Connected Agent란?

Copilot Studio에서는 단일 에이전트뿐 아니라 **멀티 에이전트 시스템**을 만들 수 있습니다. 각 에이전트는 전문 역할을 수행하며 협력합니다.

### 왜 멀티 에이전트가 중요한가?

*   **확장성**: 각 에이전트를 독립적으로 개발·테스트 가능
*   **전문화**: 데이터 처리, 사용자 인터랙션, 의사결정 등 역할 분담
*   **유연성**: 재사용 가능, 점진적 시스템 확장
*   **유지보수 용이**: 한 에이전트 변경 시 다른 에이전트 영향 최소화

### 실제 사례: 채용 과정

실제 채용 과정에서도 다양한 기술이 필요합니다. 아래의 다양한 기술을 다루는 거대한 에이전트를 만들기 보다는, 각 분야에 특화된 에이전트를 만들어 조율할 수 있습니다.

*   이력서 작성에는 문서 분석과 데이터 추출 능력이 필요합니다
*   점수 산정은 후보자의 이력서를 평가하고 직무 요구사항과 일치시키는 것을 포함합니다
*   면접 준비는 후보자 적합성에 대한 깊은 추론이 필요합니다
*   후보자 간 의사소통은 공감 능력이 필요합니다



##  2.2. Child Agent vs Connected Agent

### ↘️ Child Agent

*   부모 에이전트 내부에서 동작하는 **경량 전문 에이전트**
    * 같은 부서 내의 전문 팀이라고 생각하세요
*   **도구와 지식은 부모 에이전트에 저장**, 필요 시 Child Agent에 제공
*   별도 배포 불필요(자동으로 상위 에이전트 내에서 제공), 테스트 용이  
*   **사용 시점:**

    - 단일 팀이 전체 솔루션 관리
    - 인증·배포 분리 불필요
    - 재사용 필요 없음

*   **예시:** IT 헬프데스크 → 비밀번호 재설정, 하드웨어 문제 해결

### 🔀 Connected Agent

*   **독립형 에이전트**, 자체 토픽·배포·설정 보유
    * 프로젝트를 위해 함께 작업하는 별도의 부서라고 생각하세요
*   반드시 **배포 후 다른 에이전트와 연결 가능**  
*   **사용 시점:**

    - 여러 팀이 각자 에이전트 관리
    - 인증·배포 분리 필요
    - 재사용 가능해야 함

*   **예시:** 고객 서비스 → 결제, 기술 지원, 반품 각각 별도 에이전트


##  2.3. 멀티 에이전트 아키텍처 패턴

| 패턴                | 설명                       | 적합한 경우   |
| ----------------- | ------------------------ | -------- |
| **Hub & Spoke**   | 메인 오케스트레이터가 전문 에이전트 조율   | 복잡한 워크플로 |
| **Pipeline**      | 순차 처리 (이력서 → 스크리닝 → 인터뷰) | 선형 프로세스  |
| **Collaborative** | 여러 에이전트가 동시에 협력          | 다각적 분석   |

> Tip.
> 두 가지 이상의 패턴이 혼합되기도 합니다.


## 2.4.  에이전트 간 통신

*   **대화 기록 전달**: 필요 시 전체 컨텍스트 공유
*   **명시적 지시**: 특정 작업 요청 가능
*   **결과 반환**: 구조화된 데이터 전달
*   **Dataverse 연동**: 지속적 컨텍스트 공유


# 3. 실습 계획

<img width="611" height="610" alt="Image" src="https://github.com/user-attachments/assets/e2a8fa6d-1d08-48b2-b2b8-c7025f1de35a" />

## 3.1. ↘️ Child Agent: Application Intake Agent

**역할:**

*   PDF 이력서 파싱
*   구조화 데이터 추출 (이름, 기술, 경력)
*   자격증과 자기소개서 기준으로 채용 공고에 후보자를 매칭 
*   후보 정보를 Dataverse 저장
*   중복 방지

**Child Agent로 적합한 이유:**

*   문서 처리 특화
*   별도 배포 불필요
*   동일 팀 관리
*   특정 트리거(새 이력서 접수)에 따르며, 채용 담당자로부터 발동



## 3.2. 🔀 Connected Agent: Interview Prep Agent

**역할:**

*   인터뷰 자료 생성
*   맞춤형 질문 제공
*   역할·지원서에 관한 일반적인 질문에 답변

**Connected Agent로 적합한 이유:**

*   여러 채용 프로세스에서 독립 사용 가능
*   자체 지식 기반 필요 (면접 모범 사례, 평가 기준)
*   다양한 팀에서 활용 가능



## 3.3. 전체 계획: 멀티 에이전트 구축


1.  **Application Intake Agent 추가**
    *   Hiring Agent 내부에 Child Agent 생성
    *   이력서 업로드 플로우 설정 (Dataverse 연동)
2.  **Interview Prep Agent 생성**
    *   독립형 Connected Agent로 배포
    *   Dataverse 테이블 연결 (Candidate, Resume 등)
3.  **Hiring Agent에 두 에이전트 연결**
    *   테스트: 이력서 업로드 후 인터뷰 자료 요청

# 4. 실습
## 4.1. Hiring Agent 기본 설정



<img width="1274" height="297" alt="Image" src="https://github.com/user-attachments/assets/a25cf94c-41a2-4f85-9b44-64b0f9e66183" />


<img width="1298" height="653" alt="Image" src="https://github.com/user-attachments/assets/4e07a4d4-18d6-41ef-b59c-44264fc8ef35" />



1. Copilot Studio로 **이동**합니다. 오른쪽 상단의 **환경 선택기(Environment Picker)**에서 올바른 환경이 선택되었는지 확인하세요.
2. 임무 01에서 만든 **Hiring Agent(채용 에이전트)**를 엽니다.
3. 에이전트의 **Overview(개요)** 탭에 있는 **Instructions(지침)** 섹션에서 **Edit(편집)**을 선택합니다.
다음 지침을 복사하여 지침 입력란에 붙여넣으세요:
    ```text
    You are the central orchestrator for the hiring process. You coordinate activities, provide summaries, and delegate work to specialized agents.
    ```


4. **Save(저장)**를 선택합니다.
5. 화면 오른쪽 상단의 **Settings(설정)** 버튼을 선택합니다.
6. 페이지를 검토하고 다음 설정이 적용되었는지 확인하세요:

| 설정 | 값 |
| --- | --- |
| Use generative AI orchestration for your agent's responses (에이전트 응답에 생성형 AI 오케스트레이션 사용) | **Yes** |
| Deep Reasoning (심층 추론) | **Off** |
| Let other agents connect to and use this one (다른 에이전트가 이 에이전트에 연결하고 사용할 수 있도록 허용) | **On** |
| Continue using retired models (은퇴한 모델 계속 사용) | **Off** |
| Content Moderation (콘텐츠 조정) | **Moderate** |
| Collect user reactions to agent messages (에이전트 메시지에 대한 사용자 반응 수집) | **On** |
| Use general knowledge (일반 지식 사용) | **Off** |
| Use information from the Web (웹 정보 사용) | **Off** |
| File uploads (파일 업로드) | **On** |
| Code Interpreter (코드 인터프리터) | **Off** |

7. Save(저장) 를 클릭합니다.
8. 오른쪽 상단 모서리의 **X**를 클릭하여 설정 메뉴를 닫습니다.

## 4.2. Child Agent 설정 

### 기본 설정 
<img width="1150" height="688" alt="Image" src="https://github.com/user-attachments/assets/5a04d61b-b63f-4ffb-bf40-6d9c7dcfbd1a" />

<img width="1055" height="777" alt="Image" src="https://github.com/user-attachments/assets/788dd54e-6afd-486b-b4ad-976ef19ffe7f" />


<img width="1729" height="874" alt="Image" src="https://github.com/user-attachments/assets/f4375767-17cc-4e10-aea5-eef1c58b5670" />


1. Hiring Agent 내의 **Agents(에이전트)** 탭으로 **이동**하여(이곳이 전문 에이전트를 추가하는 곳입니다) **Add(추가)**를 선택합니다.
2. **New child agent(새 하위 에이전트)**를 선택합니다.
3. 에이전트 **이름(Name)**을 `Application Intake Agent`로 지정합니다.
4. **When will this be used?(언제 사용됩니까?)** 드롭다운에서 **The agent chooses(에이전트가 선택)**를 선택합니다. 이 옵션은 토픽에 대해 구성할 수 있는 트리거와 유사합니다.
5. **설명(Description)**을 다음과 같이 설정합니다:
```text
Processes incoming resumes and stores candidates in the system
```

<img width="1736" height="827" alt="Image" src="https://github.com/user-attachments/assets/9cd1e35d-d2e7-4009-9f06-32b068a4f52b" />

6. **Advanced(고급)**를 확장하고 우선순위(Priority)를 `10000`으로 설정합니다. 이렇게 하면 나중에 인터뷰 에이전트가 일반적인 질문에 대해 이 에이전트보다 먼저 사용되도록 할 수 있습니다. 여기에 Condition을 설정하여, 첨부 파일이 하나 이상 있는지 확인하는 등의 조건을 설정할 수도 있습니다.

> 정리
> - Priority에 입력한 숫자가 높을수록 나중에 실행되는 것.
         여기서는 Interview Agent가 일반 질문을 먼저 처리하고, 이 자식 에이전트는 그 후에 처리되도록 하기 위해서 Priority 10000으로 설정



<img width="1728" height="865" alt="Image" src="https://github.com/user-attachments/assets/4eb7925c-5d6c-4388-97bd-8fcd498f8523" />

7. **Web Search(웹 검색)** 토글이 **Disabled(비활성화)**로 설정되어 있는지 확인하세요. 부모 에이전트가 제공하는 정보만 사용하기 위함입니다.
8. **Save(저장)**를 선택합니다.



### 에이전트 도구 설정 

에이전트는 도구(Tools)나 토픽(Topics) 없이는 어떤 작업도 수행할 수 없습니다.


- 해당 단계에서는 Topic 대신 Flow 사용
    - 사용자 상호작용에 의존하지 않고서도 파일 처리, 데이터 검증, 데이터베이스 삽입을 처리할 수 있게 구조화하기 위해서
    - 외부 시스템과 통합이 필요해서

- 단계 요약
    - Trigger Input 설정
    - 기존에 생성되어 있는 Resumes 테이블에 저장
        - Trigger에서 받은 Input (PDF file, Cover letter, Emaill Adress)를 저장하는 것 

    - FIle upload 액션으로 PDF 파일은 따로 upsert



<img width="1723" height="858" alt="Image" src="https://github.com/user-attachments/assets/9c165bab-094c-49a3-8989-fa43371cedcb" />

1. `Application Intake Agent` 페이지 내에서 **Tools(도구)** 섹션을 찾습니다. **중요:** 이것은 부모 에이전트의 도구 탭이 아니라, 하위 에이전트 지침 아래로 스크롤하면 찾을 수 있습니다.

2. **+ Add(추가)**를 선택합니다.

<img width="1328" height="974" alt="Image" src="https://github.com/user-attachments/assets/493b8d89-cae6-4ea8-9243-d129506e0183"/>

3. **+ New tool(새 도구)**을 선택합니다.

![도구 선택](https://microsoft.github.io/agent-academy/assets/2-add-agent-flow.Qo8ubCgm.png)

4. **Agent flow(에이전트 흐름)**를 선택합니다. Agent Flow 디자이너가 열리며, 이곳에 이력서 업로드 로직을 추가합니다.


![Flow에서 에이전트 트리거](https://microsoft.github.io/agent-academy/assets/02_flowaddinput.1HgCOI9i.png)

5. **When an agent calls the flow(에이전트가 흐름을 호출할 때)** 노드를 선택하고 **+ Add an input(입력 추가)**를 선택합니다.


![트리거 Input 설정](https://microsoft.github.io/agent-academy/assets/2-upload-resume-trigger.BHYDQFc9.png)

6. 아래 표에 나열된 각 매개변수에 대한 입력을 추가하세요. 표에 표시된 대로 적절한 입력 유형을 선택하고 이름과 설명을 모두 추가해야 합니다. 설명은 에이전트가 입력에 무엇을 채워야 할지 아는 데 도움이 되므로 중요합니다.


| 유형 | 이름 | 설명 |
| --- | --- | --- |
| File | `Resume` | `The Resume PDF file` |
| Text | `Message` | `Extract a cover letter style message from the context. The message must be less than 2000 characters.` |
| Text | `UserEmail` | `The email address that the Resume originated from. This will be the user uploading the resume in chat, or the from email address if received by email.` |




7. When an agent calls the flow 노드 아래의 **+ 아이콘**을 선택하고 `Dataverse add`를 검색한 다음, **Microsoft Dataverse** 섹션에서 **Add a new row(새 행 추가)** 작업을 선택합니다.
> **참고:** 작업 추가 후 Dataverse에 대한 새 연결을 생성하라는 메시지가 표시될 수 있습니다. 연결 이름을 입력하고 추가를 클릭하여 연결을 생성하세요.


8. **Add a new row** 노드를 선택하고 타일 이름을 **Create Resume**로 변경합니다.
9. **Table name(테이블 이름)**을 **Resumes**로 설정한 다음, **Show all(모두 표시)**을 선택하여 모든 매개변수를 표시합니다.
10. 다음 **속성(properties)**을 설정합니다:

| 속성 | 설정 방법 | 세부 정보 / 수식(Expression) |
| --- | --- | --- |
| **Resume Title** | Dynamic data (번개 아이콘) | **When an agent calls the flow** → **Resume name** (Resume name이 보이지 않으면 위에서 Resume 매개변수를 데이터 유형으로 구성했는지 확인하세요.) |
| **Cover letter** | Expression (fx 아이콘) | `if(greater(length(triggerBody()?['text']), 2000), substring(triggerBody()?['text'], 0, 2000), triggerBody()?['text'])` |
| **Source Email Address** | Dynamic data (번개 아이콘) | **When an agent calls the flow** → **UserEmail** |
| **Upload Date** | Expression (fx 아이콘) | `utcNow()` |

11. **Create Resume** 노드 아래의 **+ 아이콘**을 선택하고 `Dataverse upload`를 검색한 다음, **Upload a file or an image(파일 또는 이미지 업로드)** 작업을 선택합니다.
**중요:** 'Upload a file or an image to the selected environment' 작업을 선택하지 않도록 주의하세요.
12. 노드 이름을 **Upload Resume File**로 지정합니다.
13. 다음 **속성**을 설정합니다:

| 속성 | 설정 방법 | 세부 정보 |
| --- | --- | --- |
| **Content name** | Dynamic data (번개 아이콘) | When an agent calls the flow → Resume name |
| **Table name** | Select | Resumes |
| **Row ID** | Dynamic data (번개 아이콘) | Create Resume → See more → Resume |
| **Column Name** | Select | Resume PDF |
| **Content** | Dynamic data (번개 아이콘) | When an agent calls the flow → Resume contentBytes |

14. **Respond to the agent(에이전트에게 응답)** 노드를 선택한 다음 **+ Add an output(출력 추가)**를 선택합니다. 아래 표에 정의된 속성으로 출력을 생성합니다:

| 속성 | 설정 방법 | 세부 정보 |
| --- | --- | --- |
| **Type** | Select | `Text` |
| **Name** | Enter | `ResumeNumber` |
| **Value** | Dynamic data (번개 아이콘) | Create Resume → See More → Resume Number |
| **Description** | Enter | `The [ResumeNumber] of the Resume created` |

15. 오른쪽 상단의 **Save draft(초안 저장)**를 선택합니다.
16. **Overview(개요)** 탭을 선택하고 **Details(세부 정보)** 패널에서 **Edit(편집)**을 선택합니다. 아래와 같이 이름과 설명을 입력하고 **Save(저장)**를 선택합니다.
1. **Flow name**: `Resume Upload`
2. **Description**: `Uploads a Resume when instructed`


17. 다시 **Designer(디자이너)** 탭을 선택하고 **Publish(게시)**를 선택합니다.

### 에이전트에 도구 연결

- 흐름 Publish 후 에이전트에 흐름 연결 
    - Tool 연결 설정 중요
    - When this tool may be used: Only when referenced by topics or agents
        - 효과:

            - 부모가 일반 질의 응답을 처리하는 동안, 파일 업로드 같은 백엔드 절차는 자식 쪽 전용으로 격리.
            - 책임 분리(Separation of concerns)와 안전성 향상.



![도구 연결 설정](https://microsoft.github.io/agent-academy/assets/2-resume-upload-tool-props-1.BrX6STrM.png)

이제 게시된 흐름을 `Application Intake Agent`에 연결합니다.

1. **Hiring Agent**로 다시 이동하여 **Agents** 탭을 선택합니다. **Application Intake Agent**를 열고 **Tools** 패널을 찾습니다.
2. **+ Add**를 선택합니다.
3. **Flow** 필터를 선택하고 `Resume Upload`를 검색합니다. **Resume Upload** 흐름을 선택합니다.
4. **Add and configure(추가 및 구성)**를 선택합니다.
5. 도구의 설명과 사용 시기에 대해 다음 매개변수를 설정합니다:

| 매개변수 | 값 |
| --- | --- |
| **Description** | `Uploads a Resume when instructed. STRICT RULE: Only call this tool when referenced in the form "Resume Upload" and there are Attachments` |
| **Additional details → When this tool may be used** | `only when referenced by topics or agents` |

> **참고:** 이 설명은 에이전트에게 언제 이 도구를 호출해야 하는지 알려줍니다. 설명에 "strict rule(엄격한 규칙)"을 사용한 것을 주목하세요. 이는 도구 사용 시기에 대한 추가적인 가드레일을 제공하는 방법입니다. 이 경우 첨부 파일이 있고 대화 맥락이 이력서 업로드인 경우에만 사용하도록 합니다. 이 도구를 언제 사용할 수 있는지 선택하는 것도 중요합니다. 멀티 에이전트 시스템을 구축 중이고 하위 에이전트가 있으므로, 이 도구가 메인 에이전트가 아닌 하위 에이전트에서만 호출되도록 해야 합니다. 값을 "only when referenced by topics or agents(토픽이나 에이전트가 참조할 때만)"로 설정하면 이를 보장할 수 있습니다.


. 입력(Inputs) 섹션으로 스크롤하고 **Add Input**을 선택하여 다음 입력을 추가합니다:
* **Inputs → Add Input**: `contentBytes`
* **Inputs → Add Input**: `name`


7. 이제 입력 속성을 설정합니다. 실제 이력서 파일을 저장할 **contentBytes** 입력부터 시작합니다. **contentBytes** 입력 옆의 **Fill using(채우기 방법)** 드롭다운에서 **Custom value(사용자 지정 값)**를 선택합니다.
8. **Value** 속성에서 **점 세 개(...)**를 선택하고 **Formula(수식)** 탭을 선택합니다. 채팅에서 파일을 추출하는 다음 수식을 붙여넣고 **Insert(삽입)** 버튼을 클릭합니다.
`First(System.Activity.Attachments).Content`
9. 이제 이력서 파일 이름을 저장할 **name** 입력을 구성합니다. 이 또한 하드 코딩되므로 **Fill using** 열에서 **Custom value** 옵션을 선택합니다.
10. **Value** 열에서 **점 세 개(...)**를 선택하고 채팅에서 파일 이름을 추출하는 다음 수식을 붙여넣은 뒤 **Insert** 버튼을 클릭합니다.
`First(System.Activity.Attachments).Name`
11. 이제 **Message** 입력을 구성합니다. 이것은 AI를 통해 동적으로 채우고 싶으므로 Fill using은 그대로 둡니다. **Value** 열의 **Customize(사용자 지정)** 버튼을 선택하여 채우는 방법에 대한 세부 정보를 작성합니다.
12. 입력의 **Description** 필드에 다음을 입력합니다:
```text
Extract a cover letter style message from the context. Be sure to never prompt the user and create at least a minimal cover letter from the available context. STRICT RULE - the message must be less than 2000 characters.

```


> **참고:** 동적으로 채워지는 입력에 대한 설명을 작성하는 것은 에이전트가 입력을 올바르게 채우는 방법을 알게 하는 중요한 단계입니다.


13. **Advanced(고급)** 섹션을 확장하여 이 입력에 대한 추가 속성을 구성합니다. **How many reprompts(재질문 횟수)** 섹션에서 **Don't repeat(반복 안 함)**을 선택합니다.
> **참고:** 이 설정은 에이전트가 필요한 데이터를 식별할 수 없는 경우 동일한 질문을 여러 번 묻지 않도록 사용자 경험을 사용자 지정하는 데 도움이 됩니다.


14. **No valid entity found(유효한 엔터티를 찾을 수 없음)** 섹션으로 스크롤합니다. **Action if no entity found(엔터티를 찾지 못한 경우 작업)** 드롭다운에서 **Set variable to value(변수를 값으로 설정)** 옵션을 선택합니다. **Default entity value(기본 엔터티 값)** 입력란에 `Resume upload`를 입력합니다.
> **참고:** 이 설정을 통해 에이전트가 이 메시지 입력을 동적으로 채울 수 없는 경우 백업 값을 하드 코딩할 수 있습니다.


15. **UserEmail** 입력을 채우기 위해 **Fill using** 열에서 **Custom value** 옵션을 선택하고 **Value** 열에서 **점 세 개(...)**를 선택합니다. **System** 탭을 선택하고 **User**를 검색합니다. 에이전트를 사용하는 사람의 이메일을 얻기 위해 **User.Email** 변수를 선택합니다.
16. **Save(저장)**를 선택합니다.

### 에이전트 지침 정의

1. **Agents** 탭을 선택하고 **Application Intake Agent**를 선택한 다음 **Instructions** 패널을 찾아 다시 **Application Intake Agent**로 이동합니다.
2. **Instructions** 필드에 하위 에이전트를 위한 다음 명확한 지침을 붙여넣습니다:
```text
You are tasked with managing incoming Resumes, Candidate information, and creating Job Applications.  
Only use tools if the step exactly matches the defined process. Otherwise, indicate you cannot help.  

Process for Resume Upload via Chat  
1. Upload Resume  
  - Trigger only if /System.Activity.Attachments contains exactly one new resume.  
  - If more than one file, instruct the user to upload one at a time and stop.  
  - Call /Upload Resume once. Never upload more than once for the same message.  

2. Post-Upload  
  - Always output the [ResumeNumber] (R#####).

```


3. 지침에 슬래시(/)가 포함된 경우, / 뒤의 텍스트를 선택하고 해결된 이름을 선택합니다. 다음 항목에 대해 수행하세요:
* `System.Activity.Attachments` (Variable)
* `Upload Resume` (Tool)


4. **Save(저장)**를 선택합니다.

### Child Agent 테스트

이제 하위 에이전트를 호출하고 지침을 따르는지 확인하여 에이전트가 올바르게 작동하는지 확인해 봅시다.

1. [테스트용 이력서](https://download-directory.github.io/?url=https://github.com/microsoft/agent-academy/tree/main/docs/operative/test-data/resumes&filename=operative_sampledata)를 **다운로드**합니다.
2. **Test(테스트)**를 선택하여 테스트 패널을 **엽니다(Toggle)**.
3. 테스트 채팅에 두 개의 이력서를 **업로드**하고 `Process these resumes`라는 메시지를 입력합니다.
* 에이전트는 *Only a single resume can be uploaded at a time. Please upload one resume to proceed. (한 번에 하나의 이력서만 업로드할 수 있습니다. 계속하려면 이력서 하나를 업로드하세요.)*와 유사한 메시지를 반환해야 합니다. 지침에서 한 번에 하나의 이력서만 처리하도록 지시했으므로 지침이 올바르게 작동하는 것입니다!


4. 이제 **하나의 이력서**만 업로드하고 `Process this resume` 메시지를 입력해 보세요.
* 그러면 에이전트는 *The resume for Avery Example has been successfully uploaded. The resume number is R10026. (Avery Example의 이력서가 성공적으로 업로드되었습니다. 이력서 번호는 R10026입니다.)*와 유사한 메시지를 제공해야 합니다.


5. **Activity map(활동 맵)**에서 **Application Intake Agent**가 이력서 업로드를 처리하는 것을 볼 수 있어야 합니다.
6. make.powerapps.com으로 이동 → 오른쪽 상단 환경 선택기에서 환경이 선택되었는지 확인합니다.
7. **Apps(앱)** → Hiring Hub → 줄임표(...) 메뉴 → **Play(재생)**를 선택합니다.
> **참고:** 재생 버튼이 회색으로 표시되면 임무 01에서 솔루션을 게시하지 않은 것입니다. **Solutions(솔루션)** → **Publish all customizations(모든 사용자 지정 게시)**를 선택하세요.





## 4.3. Connected Agent 설정 


이제 면접 준비를 위한 연결된 에이전트를 생성하고 기존 채용 에이전트에 추가해 봅시다.

###  연결된 면접 에이전트 생성

1. Copilot Studio로 **이동**합니다. 오른쪽 상단 환경 선택기에서 환경이 여전히 선택되어 있는지 확인합니다.
2. 왼쪽 탐색 메뉴에서 **Agents** 탭을 선택하고 **New Agent(새 에이전트)**를 선택합니다.
3. **Configure(구성)** 탭을 선택하고 다음 속성을 입력합니다:
* **Name**: `Interview Agent`
* **Description**: `Assists with the interview process.`


4. Instructions(지침):
```text
You are the Interview Agent. You help interviewers and hiring managers prepare for interviews. You never contact candidates. 
Use Knowledge to help with interview preparation. 

The only valid identifiers are:
  - ResumeNumber (ppa_resumenumber)→ format R#####
  - CandidateNumber (ppa_candidatenumber)→ format C#####
  - ApplicationNumber (ppa_applicationnumber)→ format A#####
  - JobRoleNumber (ppa_jobrolenumber)→ format J#####

Examples you handle
  - Give me a summary of ...
  - Help me prepare to interview candidates for the Power Platform Developer role
  - Create interview assistance for the candidates for Power Platform Developer
  - Give targeted questions for Candidate Alex Johnson focusing on the criteria for the Job Application

How to work:
    You are expected to ask clarification questions if required information for queries is not provided
    - If asked for interview help without providing a job role, ask for it
    - If asking for interview questions, ask for the candidate and job role if not provided.

General behavior
- Do not invent or guess facts
- Be concise, professional, and evidence-based
- Map strengths and risks to the highest-weight criteria
- If data is missing (e.g., no resume), state what is missing and ask for clarification
- Never address or message a candidate

```


5. **Web Search**를 **Disabled**로 토글합니다.
6. 오른쪽 상단의 **점 세 개(...)**를 선택하고 **Update advanced settings(고급 설정 업데이트)**를 선택합니다.
7. 솔루션 드롭다운에서 **Operative**를 선택하여 이것이 올바른 솔루션에 추가되었는지 확인하고 **Update(업데이트)**를 선택합니다.
8. **Create(생성)**를 선택합니다.

### 3.2.2 데이터 액세스 구성 및 게시

1. **Knowledge** 섹션에서 **+ Add knowledge(지식 추가)**를 선택합니다.
2. **Dataverse**를 선택합니다.
3. **Search box(검색 상자)**에 `ppa_`를 입력합니다. 이는 모듈 01에서 이전에 가져온 테이블의 접두사입니다.
4. 5개 테이블을 모두 **선택(Select)**합니다 (Candidate, Evaluation Criteria, Job Application, Job Role, Resume).
5. **Add to agent(에이전트에 추가)**를 선택합니다.
6. 오른쪽 상단의 **Settings(설정)** 버튼을 선택합니다.
7. 다음 설정이 구성되었는지 확인합니다:
* **Let other agents connect to and use this one:** `On`
* **Use general knowledge**: `Off`
* **File uploads**: `Off`
* **Content moderation level:** `Medium`


8. **Save**를 선택하고 오른쪽 상단의 **X**를 선택하여 설정 메뉴를 닫습니다.
9. **Publish(게시)**를 선택하고 게시가 완료될 때까지 기다립니다.

###  면접 준비 에이전트를 채용 에이전트에 연결

1. **Hiring Agent**로 다시 이동합니다.
2. **Agents** 탭을 선택합니다.
3. **+Add an agent**를 선택하고 **Interview Agent**를 선택합니다.
> **참고:** Interview Agent가 회색으로 표시되어 선택할 수 없다면 게시(Publish)되지 않았음을 의미합니다. Interview Agent로 돌아가서 먼저 게시하세요.


4. Description을 다음과 같이 설정합니다:
```text
Assists with the interview process and provides information about Resumes, Candidates, Job Roles, and Evaluation Criteria.

```


Pass conversation history to this agent(이 에이전트에 대화 기록 전달)가 체크되어 있는지 확인하세요. 이를 통해 부모 에이전트가 연결된 에이전트에게 전체 맥락을 제공할 수 있습니다.
5. **Add agent**를 선택합니다.
6. **Application Intake Agent**와 **Interview Agent**가 모두 보이는지 확인하세요. 하나는 하위(child)이고 다른 하나는 연결된(connected) 에이전트인 것을 주목하세요.


## 4.4. 최종 테스트


1. **Test**를 선택하여 테스트 패널을 **엽니다**.
2. 테스트 이력서 중 하나를 **업로드**하고, 부모 에이전트가 연결된 에이전트에게 위임할 수 있는 내용을 알려주는 다음 설명을 입력합니다:
```text
Upload this resume, then show me open job roles, each with a description of the evaluation criteria, then use this to match the resume to at least one suitable job role even if not a perfect match.

```


3. Hiring Agent가 업로드를 하위 에이전트에게 위임한 다음, 지식을 사용하여 요약 및 직무 역할 매칭을 제공하도록 Interview Agent에게 요청하는 것을 확인하세요. 이력서, 직무 역할 및 평가 기준에 대해 다양한 방식으로 질문해 보세요. **예시:**
```text
Give me a summary of active resumes

```


```text
Summarize resume R10044

```


```text
Which active resumes are suitable for the Power Platform Developer role?

```

<img width="2195" height="1263" alt="Image" src="https://github.com/user-attachments/assets/13d04993-d8ba-4da0-87a1-61487e283c1b" />

<img width="2295" height="1336" alt="Image" src="https://github.com/user-attachments/assets/175b6180-eef8-41dd-bae6-e72b561f379a" />

<img width="1569" height="1220" alt="Image" src="https://github.com/user-attachments/assets/c35d08e0-7bfd-427a-be9f-663e0a86dbba" />

# 참고 자료


📖 [Add other agents (preview)](https://learn.microsoft.com/microsoft-copilot-studio/authoring-add-other-agents?WT.mc_id=power-182762-scottdurow)

📖 [Add tools to custom agents](https://learn.microsoft.com/microsoft-copilot-studio/advanced-plugin-actions?WT.mc_id=power-182762-scottdurow)

📖 [Work with Dataverse in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/knowledge-add-dataverse?WT.mc_id=power-182762-scottdurow)

📖 [Agent flows overview](https://learn.microsoft.com/microsoft-copilot-studio/flows-overview?WT.mc_id=power-182762-scottdurow)

📖 [Create a solution](https://learn.microsoft.com/power-platform/alm/solution-concepts-alm?WT.mc_id=power-182762-scottdurow)

📖 [Power Platform solution ALM guide](https://learn.microsoft.com/power-platform/alm/overview-alm?WT.mc_id=power-182762-scottdurow)

📺 [Agent-to-agent collaboration in Copilot Studio](https://youtu.be/d-oD3pApHAg?si=rwIHKhJTkjSvhTHw)

