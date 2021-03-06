# cynergie-data-api

## But

Cet API sert à faciliter et à sécuriser la communication avec la base de données Prometheus.

## Conception 

### Communication avec Prometheus par HTTP

- Exemple :

Adresse :

`http://localhost:9090/api/v1/query_range?query=probe_http_duration_seconds&start=2018-04-07T00:00:00.781Z&end=2018-04-07T23:59:59.781Z&step=1m`

Réponse : JSON

```
{
    "data": {
        "result": [
            {
                "metric": {
                    "__name__": "probe_http_duration_seconds",
                    "instance": "bvesm.etsmtl.ca",
                    "job": "blackbox",
                    "phase": "connect"
                },
                "value": [
                    1523131800.781,
                    "0.039276171"
                ]
            }
                  
        ],
        "resultType": "vector"
    },
    "status": "success"
}

```

### Cynergie API

- Structurer les données de la réponse de l'API de Prometheus

- Exemple :

Requête : `GET http://cynergie.cedille.club/api/07/04/2018`

Réponse : JSON

```
{
	"Data":{

		"metric": "kw_total",
		"Value": "3367.000"
		"Time" : "1523131800.781"
		"Value": "4467.000"
		"Time" : "1523131800.781"
		"Value": "8777.000"
		"Time" : "1523131800.781"
	}
	
	"status": "success"
}

```

### Sources

- https://prometheus.io/docs/prometheus/latest/querying/api/
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
