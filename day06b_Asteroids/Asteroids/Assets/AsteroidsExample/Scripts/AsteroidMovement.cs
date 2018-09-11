using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class AsteroidMovement : MonoBehaviour {
    public float minSpeed = 20;
    public float maxSpeed = 50;

    private float _asteroidSpeed;
    private Rigidbody2D _rb;

    private void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
    }

    // Use this for initialization
    void Start () {
        transform.parent=null;
        transform.Rotate(Vector3.forward * Random.Range(0f, 360f));
        _asteroidSpeed = Random.Range(minSpeed, maxSpeed);
        _rb.AddForce(transform.up * _asteroidSpeed);
	}
	
	
}
