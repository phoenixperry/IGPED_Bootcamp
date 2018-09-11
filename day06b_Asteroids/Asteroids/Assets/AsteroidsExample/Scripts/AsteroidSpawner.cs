using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AsteroidSpawner : MonoBehaviour {
    public Transform asteroid;
    public float spawnTime = 1f;
    private float _angle;
    private Vector2 _screenBounds;
    private float _timer;

	// Use this for initialization
	void Start () {
        _screenBounds = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, 0));
        _timer = 0;
        SpawnAsteroid();
	}
	
	// Update is called once per frame
	void Update () {
		if (_timer>spawnTime)
        {
            SpawnAsteroid();
            _timer = 0;
        }
        else
        {
            _timer += Time.deltaTime;
        }
	}

    void SpawnAsteroid()
    {
        _angle = Random.Range(0f, 360f);
        transform.position = new Vector2((_screenBounds.x) * Mathf.Cos(_angle), (_screenBounds.y) * Mathf.Sin(_angle));
        Instantiate(asteroid, transform);
    }
}
