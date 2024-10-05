---
title: ""
# date: 2022-10-24
type: landing

design:
  # Default section spacing
  # spacing: "4rem"
  background:
    color: "#f2f3f7"

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
      css_class: light
      text-color: white
      background:
        # color: "#66d9ff"
        image:
          # Add your image background to `assets/media/`.
          # filename: stacked-peaks.svg
          filename: white.jpg
          filters:
            brightness: 0.8
          size: cover
          position: center
          parallax: false

  #### Skills
  - block: collection
    id: skills
    content:
      title: "Skills"
      subtitle: ""
      text: |-
        개발 입문 언어를 Python으로 시작하여 언어 사용에 감을 익혔습니다. 이후 개발에 입문하기 전에도 많이 들어봤던 Java를 공부하며 전자정부 프레임워크 Java 개발자 양성과정을 들으며 웹 개발에 대한 기초를 학습하였습니다. 

        수료 후 Java를 바탕으로 자료구조, 알고리즘 그리고 운영체제를 공부하고 현재는 Spring 프레임워크를 활용하여 백엔드 개발자로 활동하고 있습니다. 간단한 웹서비스는 혼자서 개발할 수 있으며,

        더 나은 서버개발자가 되기위해 Java를 이용해 TDD 개발방법을 사이드 프로젝트에서 훈련하고 Spring 프레임워크에 대한 깊은 공부를 이어가고 있습니다.
      filters:
        folders:
          - skills
    design:
      view: article-grid
      columns: 3
      show_skill_percentage: true
      background:
        color: "#f2f3f7"
        # image:
        #   filters:
        #     brightness: 10.0
        #   size: cover
        #   position: center
        #   parallax: false
  #f2f3f7

  #### Archiving - Github, Blog
  - block: collection
    id: archiving
    content:
      title: Archiving
      subtitle: ""
      text: ""
      filters:
        folders:
          - archiving
    design:
      view: article-grid
      columns: 2
      background:
        color: "#f2f3f7"

  #### Projects
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
      background:
        color: "#f2f3f7"

  #### Careers
  - block: collection
    id: careers
    content:
      title: Careers
      username: admin
      filters:
        folders:
          - careers
    design:
      # date_format: "January 2006"
      is_education_first: false
      background:
        color: "#f2f3f7"

  - block: slider
    # id: slider
    content:
      slides:
        - title: Recruit
          content: Interested in JAVA?
          align: center
          background:
            image:
              filename: project.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#000"

        - title: <span style="font-size:70%">java spring</span>
          content: <span style="font-size:70%">자바 스프링 백엔드 개발</span>
          align: center
          background:
            image:
              filename: project.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#000"

        - title: <span style="font-size:70%">java spring</span>
          content: <span style="font-size:70%">자바 스프링 백엔드 개발</span>
          align: center
          background:
            image:
              filename: project.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#000"

      design:
        slide_height: 350px
        is_fullscreen: false
        loop: true
        interval: 3000

  #### Contact
  - block: contact
    id: contact
    content:
      title: Contact
      text: |-
        나에게 관심이 있다면 여기로 !!!!!!!
      email: dlsrks0631@naver.com
      phone: 010-6758-1234
      address:
        street: 전북대학교 공과대학 7호관
        city: 전주시
        region: 전라북도
        postcode: "54896"
        country: 대한민국
        country_code: KO
      coordinates:
        latitude: "35.84601324617979"
        longitude: "127.13444961966684"
      directions:
      autolink: true
    design:
      columns: "3"
      background:
        color: "#f2f3f7"
---
