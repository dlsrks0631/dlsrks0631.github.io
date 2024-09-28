---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "7rem"

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
      text: |-
        여기다가 내가 사용하는 언어를 나열할 예정
    design:
      columns: "1"

  #### Archiving
  - block: collection
    id: archiving
    content:
      title: Archiving
      filters:
        folders:
          - event
    design:
      view: article-grid
      columns: 1

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

  - block: resume-experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: "January 2006"
      # Education or Experience section first?
      is_education_first: false

  - block: resume-skills
    content:
      title: Skills & Hobbies
      username: admin
    design:
      show_skill_percentage: false

  - block: resume-awards
    content:
      title: Awards
      username: admin
  - block: resume-languages
    content:
      title: Languages
      username: admin
---
