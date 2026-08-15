# Madduru Vamsi — Professional DevOps Portfolio

A recruiter-friendly, responsive DevOps portfolio built with HTML, CSS and JavaScript.

## Highlights

- Professional profile section using the provided profile photo
- Resume download/view button using the provided resume
- AWS, Azure and GCP skills
- Kubernetes, Docker, Terraform and Ansible
- Jenkins, GitHub Actions and ArgoCD
- Prometheus and Grafana
- DevSecOps tools
- DevOps CI/CD workflow visualization
- Project impact metrics
- Responsive mobile navigation
- Scroll reveal animations
- Copy-email interaction
- Dockerized with Nginx
- GitHub Actions CI workflow

## Folder structure

```text
madduru-vamsi-professional-portfolio/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── assets/
│   ├── profile.png
│   └── Madduru-Vamsi-Resume.pdf
│
├── screenshots/
│
├── index.html
├── style.css
├── script.js
├── Dockerfile
├── .dockerignore
└── README.md
```

## Run locally

### Option 1 — Browser

Open `index.html` directly.

### Option 2 — VS Code

Install the **Live Server** extension and open `index.html` with Live Server.

### Option 3 — Docker

```bash
docker build -t madduru-vamsi-portfolio .
docker run -d -p 8080:80 --name vamsi-portfolio madduru-vamsi-portfolio
```

Open:

```text
http://localhost:8080
```

Stop/remove:

```bash
docker stop vamsi-portfolio
docker rm vamsi-portfolio
```

## GitHub

```bash
git init
git add .
git commit -m "Create professional DevOps portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## GitHub Actions

The workflow in `.github/workflows/ci.yml` automatically:

1. Checks out the repository.
2. Validates the important website files.
3. Builds the Docker image.
4. Verifies the image.

## Important customization

The portfolio currently includes the GitHub profile link:

```text
https://github.com/maddurvamsi45
```

If your GitHub username or LinkedIn URL changes, update the links in `index.html`.

The portfolio intentionally does not invent a LinkedIn URL because the supplied resume only says "LinkedIn" without providing the actual profile URL.

## Source

Portfolio content is based on the supplied Madduru Vamsi DevOps Engineer resume.


## Project repositories

- Zomato Project: https://github.com/maddurvamsi45/Zomato-Project-1
- Jenkins Java Project: https://github.com/maddurvamsi45/jenkins-java-project-1
- Terraform EKS Project: https://github.com/maddurvamsi45/Terraform-eks-new
