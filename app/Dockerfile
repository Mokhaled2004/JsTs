# Use Ubuntu as the base image
FROM ubuntu:20.04

# Set environment variables to accept the MSSQL terms
ENV ACCEPT_EULA=Y
ENV MSSQL_SA_PASSWORD=P@ssw0rd

# Install necessary packages
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    apt-transport-https \
    ca-certificates

# Add Microsoft's official GPG key for the SQL Server repository
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -

# Add Microsoft SQL Server Ubuntu repository
RUN add-apt-repository "$(curl https://packages.microsoft.com/config/ubuntu/20.04/mssql-server-2019.list)"

# Install MSSQL Server
RUN apt-get update && apt-get install -y mssql-server

# Run the setup script to configure the server
RUN /opt/mssql/bin/mssql-conf setup accept-eula

# Expose SQL Server port
EXPOSE 1433

# Start SQL Server service
CMD ["/opt/mssql/bin/sqlservr"]