#pragma strict

var x : int = 5;

function Start () {
	Debug.Log("hello world -> " + x);
}

function Update () {
	//transform.position.z += 0.1;
	//transform.position.z += Vector3(0, 0, 0.1);
	transform.Translate(0, 0, 0.1);
}