<?php
namespace App\Controller;

use App\Entity\Article;
use App\Form\ArticleSearchType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ArticleSearchController extends AbstractController
{
    /**
     * @Route("/article/search", name="article_search")
     */
    public function index(Request $request): Response
    {
        // Création du formulaire de recherche
        $form = $this->createForm(ArticleSearchType::class);

        //Gestion de la soumission
        $form->handleRequest($request);

        //Verification de la soumission et de la validation
        if ($form->isSubmitted() && $form->isValid()) {
            $searchTitle = $form->get('title')->getData();
            $articles = $this->getDoctrine()->getRepository(Article::class)->findByTitle($searchTitle);

            //Affichage des resultats de la recherche
            return $this->render('article_search/index.html.twig', [
                'form' => $form->createView(),
                'articles' => $articles,
            ]);
        }

        //Affichage formulaire vide  
        return $this->render('article_search/index.html.twig', [
            'form' => $form->createView(),
            'articles' => null,
        ]);
    }
}