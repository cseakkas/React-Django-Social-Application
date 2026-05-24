from django.db import models
from social_auth.models import User


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    content = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.id}"
    
    class Meta:
        db_table = "posts" 


class PostImage(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="images")

    image = models.ImageField(upload_to="posts/")

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image for Post {self.post.id}"
    
    
    class Meta:
        db_table = "post_images" 




class PostLikes(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="likes")

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ("user", "post")
        db_table = "post_likes"

    def __str__(self):
        return f"{self.user.username} likes Post {self.post.id}"


class PostComments(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")

    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):

        return f"Comment by {self.user.username} on Post {self.post.id}"
    
    class Meta:
        db_table = "post_comments"

