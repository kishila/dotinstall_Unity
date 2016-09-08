#pragma strict

function Update () {

	var x : float = Input.GetAxis("Horizontal");
	transform.Translate(x * 0.2, 0, 0);

}