docker build --no-cache -f SQL\Dockerfile.PostgreSql -t todinc/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t todinc/app ../..
