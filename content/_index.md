---
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "4rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      button:
        text: 포트폴리오 다운로드
        url: uploads/resume.pdf
    design:
      # css_class: dark
      background:
        # color: "#66d9ff"
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false

  #### SKILLS

    # - block: markdown
    # content:
    #   title: '📚 My Research'
    #   subtitle: ''
    #   text: |-
    #   개발 입문 언어를 Python으로 시작하여 언어 사용에 감을 익혔습니다. 이후 개발에 입문하기 전에도 많이 들어봤던 Java를 공부하며 전자정부 프레임워크 Java 개발자 양성과정을 들으며 웹 개발에 대한 기초를 학습하였습니다. 수료 후 Java를 바탕으로 자료구조, 알고리즘 그리고 운영체제를 공부하고 현재는 Spring 프레임워크를 활용하여 백엔드 개발자로 활동하고 있습니다. 간단한 웹서비스는 혼자서 개발할 수 있으며, Rest API 를 이ㄴ용한 Web Server를 구현할 수 있습니다.현재는 배포중인 서비스를 계속 업데이트 해나가고 있습니다. 더 나은 서버개발자가 되기위해 Java를 이용해 TDD 개발방법을 사이드 프로젝트에서 훈련하고 Spring 프레임워크에 대한 깊은 공부를 이어가고 있습니다.
    # design:
    #   columns: '1'

  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        Use this area to speak to your mission. I'm a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.

        I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.
        
        Please reach out to collaborate 😃
        
  - block: collection
    id: skills
    content:
      title: "kk"
      subtitle: "하이 서브타이틀"
      filters:
        folders:
          - skills
      text: 개발 입문 언어를 Python으로 시작하여 언어 사용에 감을 익혔습니다. 이후 개발에 입문하기 전에도 많이 들어봤던 Java를 공부하며 전자정부 프레임워크 Java 개발자 양성과정을 들으며 웹 개발에 대한 기초를 학습하였습니다. 수료 후 Java를 바탕으로 자료구조, 알고리즘 그리고 운영체제를 공부하고 현재는 Spring 프레임워크를 활용하여 백엔드 개발자로 활동하고 있습니다. 간단한 웹서비스는 혼자서 개발할 수 있으며, Rest API 를 이ㄴ용한 Web Server를 구현할 수 있습니다.현재는 배포중인 서비스를 계속 업데이트 해나가고 있습니다. 더 나은 서버개발자가 되기위해 Java를 이용해 TDD 개발방법을 사이드 프로젝트에서 훈련하고 Spring 프레임워크에 대한 깊은 공부를 이어가고 있습니다.
    design:
      view: article-grid
      columns: 2
      show_skill_percentage: true


  - block: collection
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
    design:
      view: article-grid
      columns: 3

  #### Archiving - Github, Blog
  - block: collection
    id: archiving
    content:
      title: Archiving
      subtitle: ""
      text: "여긴 아카이빙 부분인데"
      filters:
        folders:
          - archiving
    design:
      view: card
      columns: 2


  #### Projects
  - block: collection
    id: projects
    content:
      title: Projects
    design:
      view: article-grid
      columns: 3

  #### Careers
  - block: collection
    id: careers
    content:
      title: Careers
      username: admin
    design:
      date_format: "January 2006"
      is_education_first: false
---
