output "eks_cluster_name" {
  value = aws_eks_cluster.mlog01.name
}

output "rds_endpoint" {
  value = aws_db_instance.mlog01.endpoint
}
