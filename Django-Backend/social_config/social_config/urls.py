
from django.contrib import admin
from django.urls import path, include

# Connect Statics and Media Files
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),

    path("api/auth/", include("social_auth.urls")),
    path("api/feeds/", include("social_feeds.urls")),


]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    
