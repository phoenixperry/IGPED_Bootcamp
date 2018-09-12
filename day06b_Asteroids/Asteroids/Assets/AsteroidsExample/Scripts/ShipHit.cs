using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class ShipHit : MonoBehaviour {
    public int lives = 3;
    public Text livesUI;
    void Start()
    {
        
    }
    void OnCollisionEnter2D(Collision2D collision)
    {
        lives--;
        if (lives==0)
        {
            //add gameover here!
            SceneManager.LoadScene(0);
        }
        else
        {
            Destroy(collision.gameObject);
            //Destroy(this.gameObject, 0.2f);
            transform.position = Vector3.zero; 
            livesUI.text = livesUI.text = "Lives: " + lives;
        }
    }
}
