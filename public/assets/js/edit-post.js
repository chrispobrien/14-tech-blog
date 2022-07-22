async function editFormHandler(event) {
    event.preventDefault();

    const post_title = document.querySelector('#post-title').value;
    const post_text = document.querySelector('#post-text').value;

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    try {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                post_title,
                post_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        };
    } catch(error) {
        alert(error);
    };
};

async function deleteFormHandler(event) {
    event.preventDefault();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      try {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        };
    } catch (error) {
        alert(error);
    };
};

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete').addEventListener('click',deleteFormHandler);