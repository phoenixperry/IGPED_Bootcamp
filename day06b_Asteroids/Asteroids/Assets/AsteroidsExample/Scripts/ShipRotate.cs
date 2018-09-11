using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]
public class ShipRotate : MonoBehaviour {

    [Header("Rotation")]
    public float speed = 5f;
    private float _spin;
    private Rigidbody2D _rb;

    // This runs when the object is activated
    void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
    }


    // Use this for initialization
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        _spin = Input.GetAxis("Horizontal");
    }

    //fixedUpdate is time based (rather than frame based) so we use it for dealing with the physics engine
    void FixedUpdate()
    {
        _rb.AddTorque(-_spin * speed);
    }
}
