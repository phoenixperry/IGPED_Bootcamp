using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShipShoot : MonoBehaviour {
    public Transform bullet;
    [Header("Input key")]
    // the key used to activate the push
    public KeyCode key = KeyCode.Space;
    private ScoreSystem _scoreSystem;
	
	void Awake () {
        _scoreSystem = GetComponent<ScoreSystem>();
	}
	
	// Update is called once per frame
	void Update () {
        if (Input.GetKeyDown(key))
        {
            Transform b = Instantiate (bullet, transform);
            b.GetComponent<BulletHit>().scoreSystem = _scoreSystem;
        }
	}
}
