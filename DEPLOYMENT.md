## Requirements

* Nginx
* Certbot
* Bun

## Nginx

Create a new Nginx site configuration:
```sh
sudo nano /etc/nginx/sites-available/api-docs.animethemes.moe
```

Paste the following configuration there:
```nginx
server {
    listen 80;
    listen [::]:80;

    server_name api-docs.animethemes.moe;
    return 301 https://$server_name$request_uri;
}

server {
    root /var/www/html/animethemes-api-docs/docs/.vitepress/dist;

    # Add index.php to the list if you are using PHP
    index index.html index.htm index.nginx-debian.html;

    server_name api-docs.animethemes.moe;

    # Nginx Bad Bot Blocker Includes
    include /etc/nginx/bots.d/ddos.conf;
    include /etc/nginx/bots.d/blockbots.conf;

    location / {
        try_files $uri $uri/ /index.html;
        index index.html;
    }

    location ~ /\.ht {
        deny all;
    }

    location ~ /.well-known {
        allow all;
    }
}
```

```sh
# Save the file, then enable the site
sudo ln -s /etc/nginx/sites-available/api-docs.animethemes.moe /etc/nginx/sites-enabled/

# Validate and reload Nginx configuration
sudo nginx -t
sudo systemctl reload nginx
sudo systemctl restart nginx
```

## Install Certificates

To install HTTPS certificates using Let's Encrypt, follow the official [guide from DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-20-04).

## Application Setup

```sh
# Go to the web directory and clone repository from Github
cd /var/www/html
sudo git clone git@github.com:AnimeThemes/animethemes-api-docs.git
cd animethemes-api-docs

# Install the dependencies using Bun
bun install

# Build the static files
bun run docs:build
```