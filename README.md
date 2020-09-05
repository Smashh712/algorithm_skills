<!-- ⚠️ This README has been generated from the file(s) "blueprint.md" ⚠️-->
<h1 align="center">algorithm-skills</h1>

# [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cbnu-community/algorithm_skills/blob/master/LICENSE.md) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/cbnu-community/algorithm_skills/wiki)

<p align="center">
  <b>Algorithm Skills는 알고리즘 개요를 시각적으로 표현한 것입니다.</b></br>
  <sub><sub>
</p>

<br />


<p align="center">
	<a href="https://github.com/cbnu-community/algorithm_skills" target="_blank">
		<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbDiKCH%2FbtqH2dKcm0C%2FFmahibStAnT7AC1IrUz0G0%2Fimg.gif" alt="Algorithm Skills Demo" width="800" />
	</a>
</p>
<br />
<details>
<summary>📖 목차</summary>
<br />

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#table-of-contents)

## ➤ Table of Contents

* [➤ FAQ](#-faq)
	* [Algorithm Skills가 뭔가요?](#Algorithm-Skills가-뭔가요?)
	* [이 페이지에 나와있는 알고리즘의 선정 기준은 무엇인가요?](#이-페이지에-나와있는-알고리즘의-선정-기준은-무엇인가요?)
	* [이 프로젝트에 도움을 주려면 어떻게 하나요?](#이-프로젝트에-도움을-주려면-어떻게-하나요?)
	* [해결한 문제는 풀었다고 표시해두고 싶은데 어떻게 하나요?](#해결한-문제는-풀었다고-표시해두고-싶은데-어떻게-하나요?)
	* [옆으로 스크롤하는 거 불편한데, 세로로 스크롤 할 수 없나요?](#옆으로-스크롤하는-거-불편한데,-세로로-스크롤-할-수-없나요?)
	* [제작자와 컨택하려면 어떻게 해야하나요?](#제작자와-컨택하려면-어떻게-해야하나요?)
* [➤ 기초유형](#➤-기초유형)
	* [자료구조](#자료구조)
	* [스택](#스택)
		* [Example](#example)
	* [큐](#큐)
		* [Example](#example-1)
	* [트리](#트리)
		* [Example](#example-2)
	* [Quiz](#quiz)
	* [정렬](#정렬)
	* [정의](#정의)
	* [Example](#example-3)
		* [O(n²)](#O(n²))
			* [버블정렬](#버블정렬)
			* [선택정렬](#선택정렬)
			* [삽입정렬](#삽입정렬)
		* [O(n log n)](#on-log-n)
			* [퀵정렬](#퀵정렬)
			* [힙정렬](#힙정렬)
			* [병합정렬](#병합정렬)
	* [Quiz](#quiz-1)
	* [탐색](#탐색)
	* [완전탐색](#완전탐색)
		* [이진탐색](#이진탐색)
			* [Example](#example-4)
		* [문자열탐색](#문자열탐색)
			* [Example](#example-5)
	* [그래프](#그래프)
		* [BFS](#bfs)
			* [Example](#example-6)
		* [DFS](#dfs)
			* [Example](#example-7)
	* [Quiz](#quiz-2)
* [➤ 심화유형](#심화유형)
	* [Hash](#hash)
	* [정의](#정의)
	* [Example](#example-8)
		* [C++](#c)
		* [Python](#python)
		* [Java](#java)
	* [Quiz](#quiz-3)
	* [DP](#dp)
	* [정의](#-18)
	* [Example](#example-9)
		* [C++](#c-1)
		* [Python](#python-1)
		* [Java](#java-1)
	* [Quiz](#quiz-4)
	* [Greedy](#greedy)
	* [정의](#-19)
	* [Example](#example-10)
		* [C++](#c-2)
		* [Python](#python-2)
		* [Java](#java-2)
	* [Quiz](#quiz-5)
* [➤ 코딩테스트대비문제](#➤-코딩테스트대비문제)
	* [기업](#기업)
	* [Kakao](#kakao)
	* [Line](#line)
	* [네이버](#네이버)
	* [삼성](#삼성)
	* [토스](#토스)
	* [대회](#대회)
	* [ACM-ICPC](#acm-icpc)
* [➤ Contributors](#➤-contributors)
* [➤ License](#➤-license)
</details>


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#faq)

## ➤ FAQ

### Algorithm Skills가 뭔가요?
Algorithm Skills는 알고리즘 개요를 시각적으로 표현한 것입니다.

### 이 페이지에 나와있는 알고리즘의 선정 기준은 무엇인가요?
최근 코딩테스트 문제에서 많이 나오고, 활용되는 알고리즘들을 우선적으로 선정했습니다

### 이 프로젝트에 도움을 주려면 어떻게 하나요?
Github 이 페이지로 가서 철자 수정을 도와주시거나, 오류를 알려주시거나 새로운 기능을 제안해주시면 됩니다! 어떤 도움이든 감사합니다!

### 해결한 문제는 풀었다고 표시해두고 싶은데 어떻게 하나요?
페이지 하단에 가면 "구글 로그인"이라는 버튼이 있습니다. 그 버튼을 눌러 로그인 하시면, 문제 앞에 체크박스가 생깁니다. 푼 문제는 체크박스를 클릭해서 풀었다고 표시하면 됩니다!

### 옆으로 스크롤하는 거 불편한데, 세로로 스크롤 할 수 없나요?
페이지 상단 왼쪽에 보면 컴팩트 모드로 바꿀 수 있는 스위치가 있습니다! 만약 컴팩트 모드를 다른 사람에게 공유하고 싶다면, url 끝에 ?compact 를 추가해서 공유해주세요

### 제작자와 컨택하려면 어떻게 해야하나요?
brill_be@naver.com 로 이메일 주세요! 이 프로젝트에 관해 더 알고싶으면 연락주시면 됩니다.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#)

## ➤ 기초유형

### 자료구조

### 스택

LIFO(Last In First Out)형 자료구조, 접근이 항상 목록 끝에서 일어난다.



#### Example

언어 및 자료형 별로 스택을 구현한 예제



### 큐

FIFO(First In First Out)형 자료구조, 먼저 들어간 데이터가 먼저 나오는 형태다.



#### Example

언어 및 자료형 별로 큐를 구현한 예제



### 트리

그래프의 일종으로, 여러 노드가 한 노드를 가리킬 수 없는 구조



#### Example

언어 및 자료형 별로 트리를 구현한 예제



### Quiz






### 정렬

### 정의

n개의 수가 주어졌을 때, 사용자가 지정한 조건에 따라 정렬하는 알고리즘



### Example

정렬 알고리즘의 종류별 예제이다. 기본적으로 python의 경우 sort()라는 메소드가 있다.



#### O(n²)

수행 방식이 단순하지만, 시간이 비교적 오래걸리는 정렬이다.



##### 버블정렬

거품이 올라오는 것 처럼, 앞에서부터 두 수를 마지막까지 비교하면서 큰 수가 뒤로오는 정렬



##### 선택정렬

첫 번째부터 마지막까지 훑어서, 가장 작은 수부터 정렬하는 방식



##### 삽입정렬

n 번째 원소를 n-1번째 원소부터 1번째 원소까지 비교하며 삽입하는 정렬



#### O(n log n)

수행 방식이 O(n²)에 비해 복잡하지만, 수행시간이 빠르다.



##### 퀵정렬

한 원소를 기준(pivot)으로 잡아, 기준보다 작으면 앞으로, 크면 뒤로 보내는 정렬이다. 최악의 경우 O(n²)도 나온다.



##### 힙정렬

원소를 모두 힙에 삽입해, 힙의 루트에 있는 값은 남은 수들 중에서 최솟값을 출력하고 힙에서 제거하는 방식



##### 병합정렬

원소를 모두 1개로 쪼개서 자른 순서의 역순으로 크기를 비교해 붙이는 방식



### Quiz






### 탐색

### 완전탐색

가능한 모든 상황을 찾는 탐색



#### 이진탐색

중간을 기준으로 찾아내는 값을 기준과 비교하여 크면 오른쪽 작으면 왼쪽으로 반복하며 찾아내는 탐색



##### Example

각 언어별 이진탐색 예제



#### 문자열탐색

문자열에서 어떤 패턴을 가진 문장을 찾아내는 알고리즘



##### Example





### 그래프

정점(Vertex)과 정점 사이를 연결하는 변(Edge)으로 구성, 형태에 따라 특징이 달라진다.



#### BFS

Breadth First Search(너비 우선 탐색),루트에서 시작해 부모 노드와 연결된 모든 자식 노드들을 방문하고 이 과정을 반복한다.



##### Example

각 언어별 예제



#### DFS

Depth First Search(깊이 우선 탐색), 루트에서 시작해 최대한 깊숙히 있는 자식노드를 방문하고 돌아오는 탐색하는 방식이다.



##### Example

각 언어별 예제



### Quiz







[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#)

## ➤ 심화유형

### Hash

### 정의

Key-Value 쌍으로 데이터를 저장하는 자료구조



### Example

각 언어별 해시 예제코드



#### C++

C/C++ 해시 예제코드



#### Python

Python에서 해시테이블 구현



#### Java

JAVA에서 해시테이블 구현



### Quiz

난이도 별 해시테이블 문제




### DP

### 정의

특정 범위까지의 값을 구하기 위해서 그것과 다른 범위까지의 값을 이용하여 효율적으로 값을 구하는 알고리즘



### Example

각 언어별 DP 예제코드



#### C++

C/C++ DP 예제코드



#### Python

Python에서 DP 구현



#### Java

JAVA에서 DP 구현



### Quiz

난이도 별 DP 문제




### Greedy

### 정의

매 선택에서 지금 이 순간 당장 최적인 답을 선택하여 적합한 결과를 도출하는 모토를 가진 알고리즘



### Example

각 언어별 greedy 예제코드



#### C++

C/C++ Greedy 예제코드



#### Python

Python에서 Greedy 예제코드



#### Java

JAVA에서 Greedy 예제코드



### Quiz

난이도 별 Greedy 문제





[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#)

## ➤ 코딩테스트대비문제

### 기업

### Kakao

카카오 블라인드 채용 및 기타 코딩테스트 대비 문제



### Line

Line 블라인드 채용 및 기타 코딩테스트 대비 문제



### 네이버

네이버의 경우 코딩테스트 문제를 공개하지 않아 후기를 위주로 참고



### 삼성

삼성 소프트웨어 역량 테스트 기출 문제



### 토스

토스의 경우 코딩테스트 문제를 공개하지 않아 후기를 위주로 참고




### 대회

### ACM-ICPC

ACM-ICPC 본선 문제집, 되도록 원문으로 된 문제를 풀어보는 것이 좋다.




[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

## ➤ Contributors
	

| [<img alt="bebusl" src="https://data.ac-illust.com/data/thumbnails/a7/a74afdc890960a2341644e16b36e9f35_t.jpeg" width="100">](https://github.com/bebusl) | [<img alt="ZScomnet" src="https://avatars1.githubusercontent.com/u/48237348?s=460&v=4" width="100">](https://github.com/ZScomnet) | [<img alt="dungbik" src="https://avatars2.githubusercontent.com/u/49610681?s=460&u=c796432dbdd2e4d3a6e26c211a668c457f4e1fe0&v=4" width="100">](https://github.com/dungbik) |
|:--------------------------------------------------:|:--------------------------------------------------:|:--------------------------------------------------:|
| [bebusl](https://github.com/bebusl)              | [ZScomnet](https://github.com/ZScomnet)          | [dungbik](https://github.com/dungbik)            |
| 🌴                                               | 🔥                                               | 📖                                               |


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#license)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).