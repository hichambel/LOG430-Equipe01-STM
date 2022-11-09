FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ./ssl/server.crt /usr/local/share/ca-certificates/server.crt
RUN update-ca-certificates
COPY ["HealthMonitorAPI.csproj", "./"]
RUN dotnet restore "./HealthMonitorAPI.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "HealthMonitorAPI.csproj" -c Release -o /app/build
FROM build AS publish
RUN dotnet publish "HealthMonitorAPI.csproj" -c Release -o /app/publish
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HealthMonitorAPI.dll"]