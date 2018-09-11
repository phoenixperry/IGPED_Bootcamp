using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreSystem : MonoBehaviour {
    private int _score;
    public Text uiScore;

	// Use this for initialization
	void Start () {
        ResetScore();
	}
	
	public void ResetScore()
    {
        _score = 0;
        uiScore.text = "Score: 0";
    }

    public void IncreaseScore(int increaseValue)
    {
        _score += increaseValue;
        uiScore.text = "Score: " + _score;
    }
}
