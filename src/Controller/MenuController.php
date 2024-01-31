<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MenuController  extends AbstractController
{
    #[Route('/menu', name:'menu')]
    /*   
    public function redirectToArticle(): Response
    {
        return $this->redirectToRoute('article_index');
    }
    */
    public function Menu(): Response
    {
        return $this->render('menu/index.html.twig');
    }
}
