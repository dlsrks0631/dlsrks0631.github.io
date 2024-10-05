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
        text: Download Portfolio
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        # color: "#66d9ff"
        image:
          # Add your image background to `assets/media/`.
          # filename: stacked-peaks.svg
          filename: white.jpg
          filters:
            brightness: 0.4
          size: cover
        position: center
        parallax: false
        color: "#000"

  - block: collection
    id: skills
    content:
      title: "Skills"
      subtitle: ""
      text: |-
        I started my development journey with Python, getting a feel for using the language. Before even beginning development, I had heard a lot about Java and went on to study it, attending a course on Java development using the e-Government Framework to learn the basics of web development.

        After completing the course, I built on my Java knowledge by studying data structures, algorithms, and operating systems, and I am currently active as a backend developer using the Spring Framework. I can develop simple web services on my own,

        and to become a better server developer, I am practicing TDD development methods with Java in side projects and continuing my in-depth study of the Spring Framework.
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
      date_format: "January 2006"
      is_education_first: false
      background:
        color: "#f2f3f7"

  #### Contact
  - block: contact
    id: contact
    content:
      title: Contact
      text: |-
        전북대학교 김제현
      email: ksl(at)jbnu.ac.kr
      phone: +82-63-270-2406
      address:
        street: 전북대학교 공과대학 7호관 626호
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
---
