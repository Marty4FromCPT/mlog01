

## 🧱 Project Structure

```bash
devops-metrics-logger/
├── .github/workflows/     # GitHub Actions CI/CD
├── terraform/             # All AWS infrastructure (EKS, RDS, IAM, etc.)
├── helm-charts/           # Helm charts for frontend, backend, monitoring
│   ├── frontend/
│   ├── backend/
│   └── monitoring/        # Prometheus + Grafana (kube-prom-stack)
├── argo-cd/               # Argo CD application definitions
├── backend/               # Python app (FastAPI or Flask)
│   ├── app.py
│   └── requirements.txt
├── frontend/              # Node.js frontend
│   ├── app.js
│   └── package.json
├── scripts/               # Optional helper scripts (build, deploy, etc.)
├── .gitignore
└── README.md

✅ Terraform Configuration Plan
Component	Choice
Region	us-east-1
RDS Engine	MySQL
K8s Version	1.30
Node Group	2 nodes (t3.medium)
Subnet Layout	2x public, 2x private
RDS Location	Private subnet

📁 terraform/ Directory Structure

Edit
mlog01/
└── terraform/
    ├── main.tf              # Root module calling all resources
    ├── variables.tf         # Input variables
    ├── outputs.tf           # Outputs
    ├── vpc.tf               # VPC, subnets, NAT, etc.
    ├── eks.tf               # EKS Cluster + Node Group
    ├── rds.tf               # MySQL RDS DB instance
    ├── iam.tf               # IAM roles for EKS + RDS access
    ├── security.tf          # Security groups and network rules
    └── providers.tf         # AWS + Kubernetes providers

🛠️ Tools You’ll Use
Tool	Purpose
Terraform	Provision AWS: VPC, EKS, RDS/DynamoDB, IAM
Helm	Deploy all Kubernetes resources
EKS	Host your app
Argo CD	GitOps continuous deployment
Prometheus	Collect metrics from your backend
Grafana	Visualize logs/metrics
Node.js/Python	Simple backend API (POST logs, GET logs)
React/HTML	Simple frontend to enter log entries
GitHub Actions	Optional CI/CD pipeline for packaging


✅ Learning Outcomes
GitOps and Helm charts

Terraform infrastructure-as-code

Kubernetes operations and app deployment

Monitoring with Prometheus + Grafana

Application logging and metric exporting

Secure IAM and networking on AWS

Clean, production-minded DevOps practices