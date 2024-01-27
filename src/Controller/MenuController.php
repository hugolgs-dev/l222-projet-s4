<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MenuController # extends AbstractController
{
    #[Route('/menu')]
     
    public function index(): Response
    {
        
        $menu_composant = [
            'Accueil' => $this->generateUrl('home'),
            'Blog' => $this->generateUrl('blog'),
            'Articles' => $this->generateUrl('articles'),
            'Catégories' => $this->generateUrl('categories'),
            
        ];

        return $this->render('menu/index.html.twig', [
            'menu_composant' => $menu_composant,
            
        ]);
    }
}
