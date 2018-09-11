using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WorldWrap : MonoBehaviour {
    Renderer[] _renderers;
    bool _isWrappingX;
    bool _isWrappingY;
	// Use this for initialization
	void Awake () {
        _renderers = GetComponentsInChildren<Renderer>();
	}
	
	// Update is called once per frame
	void Update () {
        //Debug.Log(CheckRenderers());
        ScreenWrap();
	}

    bool CheckRenderers()
    {
        foreach (Renderer r in _renderers)
        {
            // If at least one render is visible, return true
            if (r.isVisible)
            {
                return true;
            }
        }

        // Otherwise, the object is invisible
        return false;

    }

    void ScreenWrap()
    {
        bool isVisible = CheckRenderers();

        if (isVisible)
        {
            _isWrappingX = false;
            _isWrappingY = false;
            return;
        }

        if (_isWrappingX && _isWrappingY)
        {
            return;
        }

        Camera cam = Camera.main;
        Vector3 viewportPosition = cam.WorldToViewportPoint(transform.position);
        Vector3 newPosition = transform.position;
        Debug.Log(viewportPosition);
        if (!_isWrappingX && (viewportPosition.x > 1 || viewportPosition.x < 0))
        {
            newPosition.x = -newPosition.x;

            _isWrappingX = true;
        }

        if (!_isWrappingY && (viewportPosition.y > 1 || viewportPosition.y < 0))
        {
            newPosition.y = -newPosition.y;

            _isWrappingY = true;
        }

        transform.position = newPosition;
    }
}
