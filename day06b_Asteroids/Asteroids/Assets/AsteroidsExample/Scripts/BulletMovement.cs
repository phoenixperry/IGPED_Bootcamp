using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class BulletMovement : MonoBehaviour {
    public float bulletLife = 1;
    public float bulletspeed=100;
    private float _timer;
    private Rigidbody2D _rb;

    void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
    }

    // Use this for initialization
    void Start () {
        _rb.AddForce(transform.up*bulletspeed);
        _timer = 0;
	}
	
	// Update is called once per frame
	void Update () {
		if (_timer<bulletLife)
        {
            _timer += Time.deltaTime;
        }
        else
        {
            Destroy(this.gameObject);
        }
	}
}
