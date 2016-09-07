#pragma strict

var ball : Transform;

function Update () {

	if (Input.GetButtonUp("Jump")) {
		Instantiate(ball, transform.position, transform.rotation);
	}

}