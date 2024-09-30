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
  - block: markdown
    id: skills
    content:
      title: "📚 Skills"
      subtitle: ""
      username: admin
      text: |-
        여기다가 내가 사용하는 언어를 나열할 예정
    design:
      show_skill_percentage: false

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
      username: project
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

  #### example
  - block: collection
    content:
      slides:
        - title: <span style="font-size:70%">Recruit</span>
          content: <span style="font-size:70%">Interested in MacsLAB?</span>
          align: center
          background:
            image:
              # filename: recruitment.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#000"
          link:
            icon: user
            icon_pack: fas
            text: <span style="font-size:60%">Join Us</span>
            text-color: "#000"
            url: contact

        - title: <span style="font-size:70%">AI</span>
          content: <span style="font-size:70%">의료/항공우주/컨텐츠 등 특성화 분야에 적용 가능한 AI 기술 개발<span style="font-size:70%">
          align: center
          background:
            image:
              # filename: Ai.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#000"

        - title: <span style="font-size:70%">Healthcare</span>
          content: <span style="font-size:70%">의료 및 헬스케어 분야에 적용 가능한 AI 기술 개발</span>
          align: center
          background:
            image:
              # filename: healthcare.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#000"

        - title: <span style="font-size:70%">Mathematics</span>
          content: <span style="font-size:70%">AI와 관련된 수학 및 최적화 이론 연구</span>
          align: center
          background:
            image:
              # filename: mathematics.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#000"

        - title: <span style="font-size:70%">Development</span>
          content: <span style="font-size:70%">기반 기술을 활용한 Full-Stack 어플리케이션 개발</span>
          align: center
          background:
            image:
              # filename: development.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#000"

    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: "350px"
      slide_width: "100px"
      is_fullscreen: false
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 3000
---
