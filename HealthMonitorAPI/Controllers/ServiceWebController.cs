using HealthMonitorAPI.DTOs;
using HealthMonitorAPI.Entities;
using Microsoft.AspNetCore.Mvc;

namespace HealthMonitorAPI.Controllers;

public class HealthMonitorController : BaseApiController
{
    //private readonly IServiceWebRepository _serviceWebRepository;
    public HealthMonitorController(/*IServiceWebRepository serviceWebRepository*/)
    {
        //_serviceWebRepository = serviceWebRepository;
    }

    [HttpGet]
    public async Task<ActionResult<ServiceWebDto[]>> RecupererServicesWeb()
    {
        List<ServiceWebDto> serviceWebDtos = CreerListeServiceWebDTOs();
        
        return serviceWebDtos.ToArray<ServiceWebDto>();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ServiceWebDto>> RecupererServiceWebParId(string id)
    {
        List<ServiceWebDto> serviceWebDtos = CreerListeServiceWebDTOs();
        ServiceWebDto serviceWeb = new ServiceWebDto();

        foreach(ServiceWebDto serviceWebDto in serviceWebDtos)
        {
            if (serviceWebDto.Id == id)
            {
                serviceWeb = serviceWebDto;
                serviceWeb.Code = GenererCodeAleatoire();
            }
        }

        return serviceWeb;
    }

    private string GenererCodeAleatoire() {
        string[] listeCode = {"200", "404", "400", "500", "401", "203"};
        Random random = new Random();

        return listeCode[random.Next(6)];
    }

    private List<ServiceWebDto> CreerListeServiceWebDTOs()
    {
        List<ServiceWebDto> serviceWebDtos = new List<ServiceWebDto>();

        serviceWebDtos.Add(new ServiceWebDto {
            Id = "1",
            Nom = "Gestionnaire de Trajet",
            Description = "Retourne le trajet le plus rapide",
            Url = "http://portainer.10.194.33.151.nip.io/",
            Code = "200"
        });

        serviceWebDtos.Add(new ServiceWebDto {
            Id = "2",
            Nom = "Gestionnaire de Météo",
            Description = "Indique l\'impact de la météo sur le trajet",
            Url = "http://portainer.10.194.33.151.nip.io/",
            Code = "404"
        });

        serviceWebDtos.Add(new ServiceWebDto {
            Id = "3",
            Nom = "Gestionnaire de Chaos",
            Description = "Stimule de façon abusive l\'application afin de tester ses vulnérabilités",
            Url = "http://portainer.10.194.33.151.nip.io/",
            Code = "401"
        });

        serviceWebDtos.Add(new ServiceWebDto {
            Id = "4",
            Nom = "Gestionnaire fictif 1",
            Description = "Retourne de l\'information juste pour dire qu\'il y a du texte ...",
            Url = "http://portainer.10.194.33.151.nip.io/",
            Code = "500"
        });

        serviceWebDtos.Add(new ServiceWebDto {
            Id = "5",
            Nom = "Gestionnaire fictif 2",
            Description = "Retourne de l\'information juste pour dire qu\'il y a du texte ...",
            Url = "http://portainer.10.194.33.151.nip.io/",
            Code = "206"
        });

        serviceWebDtos.Add(new ServiceWebDto {
            Id = "6",
            Nom = "Gestionnaire fictif 3",
            Description = "Retourne de l\'information juste pour dire qu\'il y a du texte ...",
            Url = "http://portainer.10.194.33.151.nip.io/",
            Code = "400"
        });

        serviceWebDtos.Add(new ServiceWebDto {
            Id = "7",
            Nom = "Gestionnaire fictif 4",
            Description = "Retourne de l\'information juste pour dire qu\'il y a du texte ...",
            Url = "http://portainer.10.194.33.151.nip.io/",
            Code = "200"
        });

        serviceWebDtos.Add(new ServiceWebDto {
            Id = "8",
            Nom = "Gestionnaire fictif 5",
            Description = "Retourne de l\'information juste pour dire qu\'il y a du texte ...",
            Url = "http://portainer.10.194.33.151.nip.io/",
            Code = "403"
        });

        serviceWebDtos.Add(new ServiceWebDto {
            Id = "9",
            Nom = "Gestionnaire fictif 6",
            Description = "Retourne de l\'information juste pour dire qu\'il y a du texte ...",
            Url = "http://portainer.10.194.33.151.nip.io/",
            Code = "500"
        });

        return serviceWebDtos;
    }

}
