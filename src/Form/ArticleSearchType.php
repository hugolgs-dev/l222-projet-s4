<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType; 

class ArticleSearchType extends AbstractType
{
    //Ajout des champs du fomulaire 
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            // Champs de saisie du titre de l'article
            ->add('title', TextType::class, [
                'label' => 'Title',
                'required' => TRUE, 
            ])
            // Bouton soumission formulaire 
            ->add('search', SubmitType::class, [ 
                'label' => 'Search',
            ]);
    }

}
