Bot de test pour le serveur Dev Stories


# Commande pm2

## lance une instance de notre app
pm2 start app.js

## arrête l'instance mais conserve l'app dans la liste des process managés
pm2 stop app.js

## affiche ladite liste
pm2 ls

## affiche les logs
pm2 logs

## affiche les stats d'utilisation
pm2 monit

## redémarre l'app
pm2 restart app.js

## arrête l'app et l'efface de la liste
pm2 delete app.js

## lance l'app en mode cluster avec -i instances
pm2 start app.is -i 8

## mode cluster avec une instance par thread cpu
pm2 start -i max