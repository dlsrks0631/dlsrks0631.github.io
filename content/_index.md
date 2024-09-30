---
# Leave the homepage title empty to use the site title
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

  #### Archiving
  - block: collection
    id: archiving
    content:
      title: Archiving
      filters:
        folders:
          - archiving
    design:
      view: article-grid
      columns: 2

  #### Projects
  - block: collection
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - publication
        featured_only: true
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

languages:
  - name: Korean
    percent: 100
  - name: English
    percent: 75
---
