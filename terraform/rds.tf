resource "aws_db_subnet_group" "mlog01" {
  name       = "mlog01-db-subnet-group"
  subnet_ids = aws_subnet.private[*].id
  tags       = { Name = "mlog01-db-subnet-group" }
}

resource "aws_db_instance" "mlog01" {
  identifier              = "mlog01-db"
  engine                  = "mysql"
  instance_class          = "db.t3.micro"
  allocated_storage       = 20
  username                = var.db_username
  password                = var.db_password
  db_subnet_group_name    = aws_db_subnet_group.mlog01.name
  vpc_security_group_ids  = [aws_security_group.rds_sg.id]
  skip_final_snapshot     = true
  publicly_accessible     = false
}
