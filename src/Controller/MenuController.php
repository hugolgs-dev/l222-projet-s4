<?php

// src/Controller/MenuController.php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MenuController extends AbstractController
{
    #[Route('/menu')]
    public function index(): Response
    {
        // les composants du menu
        $menu_composants = [
            'Accueil' => $this->generateUrl('home'),
            'Blog' => $this->generateUrl('blog'),
            'Articles' => $this->generateUrl('articles'),
            'Catégories' => $this->generateUrl('categories'),
            
        ];

        // pour générer & afficher les informations du menu grâce au template
        return $this->render('menu/index.html.twig', [
            'menu_composants' => $menu_composants,
        ]);
    }
}
