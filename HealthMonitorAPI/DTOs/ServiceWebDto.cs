using HealthMonitorAPI.Entities;

namespace HealthMonitorAPI.DTOs;

public class ServiceWebDto
{
    public string Id { get; set; }
    public string Nom { get; set; }
    public string Description { get; set; }
    public string Url { get; set; }
    public string Code { get; set; }
}