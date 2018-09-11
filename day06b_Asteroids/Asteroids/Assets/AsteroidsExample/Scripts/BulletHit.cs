using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BulletHit : MonoBehaviour {
    public ScoreSystem scoreSystem;
	void OnCollisionEnter2D (Collision2D collision)
    {
        scoreSystem.IncreaseScore(100);
        Destroy(collision.gameObject);
        Destroy(this.gameObject, 0.2f);
    }


}
