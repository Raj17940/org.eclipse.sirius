/*******************************************************************************
 * Copyright (c) 2009, 2014 THALES GLOBAL SERVICES.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
package org.eclipse.sirius.diagram.editor.tools.internal.menu.refactoring;

import java.util.Collection;
import java.util.Set;

import org.eclipse.emf.edit.command.CommandParameter;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.sirius.diagram.editor.tools.internal.menu.refactoring.border.BorderRefactoringAction;
import org.eclipse.sirius.editor.tools.api.menu.AbstractEObjectRefactoringAction;
import org.eclipse.sirius.editor.tools.api.menu.AbstractMenuBuilder;
import org.eclipse.ui.IEditorPart;

import com.google.common.base.Predicate;
import com.google.common.collect.Sets;

/**
 * The menu for the refactoring actions.
 * 
 * @author cbrun
 * 
 */
public class DiagramRefactoringMenu extends AbstractMenuBuilder {
    /**
     * {@inheritDoc}
     */
    @Override
    protected String getLabel() {
        return "Refactoring...";
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public void update(final Collection newChildDescriptors, final ISelection selection, final IEditorPart editor) {
        depopulate();
        advancedChildActions = generateRefactoringActions(selection, editor);
    }

    private Collection generateRefactoringActions(final ISelection selection, final IEditorPart editor) {

        // We first build all candidate Actions
        Set<AbstractEObjectRefactoringAction> allActions = Sets.newLinkedHashSet();
        allActions.add(new BorderRefactoringAction(editor, selection));
        allActions.add(new EdgeMappingRefactoringAction(editor, selection));

        // We only add to the menu the actions that have a valid selection
        return Sets.filter(allActions, new Predicate<AbstractEObjectRefactoringAction>() {

            public boolean apply(AbstractEObjectRefactoringAction candidateAction) {
                return candidateAction.isSelectionValid();
            }
        });
    }

    /**
     * {@inheritDoc}
     */
    @Override
    protected boolean isMine(final CommandParameter object) {
        // not relevant here
        return false;
    }

}
