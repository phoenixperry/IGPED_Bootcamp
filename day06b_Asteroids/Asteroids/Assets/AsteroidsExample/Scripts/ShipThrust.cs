using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(Rigidbody2D))]

public class ShipThrust : MonoBehaviour {
    public float thrustSpeed;
    [Header ("Thrust Sprites")]
    public Sprite thrustOn;
    public Sprite thrustOff;

    private Rigidbody2D _rb;
    private SpriteRenderer _sr;
    private int _thrustState;

    [Header("Input key")]
    // the key used to activate the push
    public KeyCode key = KeyCode.UpArrow;

    // This runs when the object is activated
    void Awake()
    {
        _rb = GetComponent<Rigidbody2D>();
        _sr = GetComponent<SpriteRenderer>();
    }

    void Update()
    {
        if (Input.GetKey(key))
        {
            _sr.sprite = thrustOn;
            _thrustState = 1;
        }
        else
        {
            _sr.sprite = thrustOff;
            _thrustState = 0;
        }
    }

    void FixedUpdate()
    {
        _rb.AddForce(transform.up * thrustSpeed * _thrustState);
    }
}
