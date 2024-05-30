document.addEventListener("DOMContentLoaded", function() {
    var studentNames = [
        {% for student in students %}
        "{{ student.name }}",
        {% endfor %}
    ];

    var input = document.getElementById("id_name");
    new Awesomplete(input, {
        list: studentNames
    });
});
