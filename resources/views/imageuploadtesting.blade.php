<html>
    <body>
        <br><br>
        <form action="/image-upload-data" method="post" enctype="multipart/form-data" >
            @csrf
            <input type="file" name="image" >
            <input type="submit" value="Submit">
        </form>
    </body>
</html>