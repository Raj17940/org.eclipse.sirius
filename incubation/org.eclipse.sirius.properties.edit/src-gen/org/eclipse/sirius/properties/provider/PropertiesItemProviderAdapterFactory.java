/**
 * Copyright (c) 2016 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *
 */
package org.eclipse.sirius.properties.provider;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.eclipse.emf.common.notify.Adapter;
import org.eclipse.emf.common.notify.Notification;
import org.eclipse.emf.common.notify.Notifier;
import org.eclipse.emf.common.util.ResourceLocator;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.edit.command.CommandParameter;
import org.eclipse.emf.edit.domain.EditingDomain;
import org.eclipse.emf.edit.provider.ChangeNotifier;
import org.eclipse.emf.edit.provider.ComposeableAdapterFactory;
import org.eclipse.emf.edit.provider.ComposedAdapterFactory;
import org.eclipse.emf.edit.provider.IChangeNotifier;
import org.eclipse.emf.edit.provider.IChildCreationExtender;
import org.eclipse.emf.edit.provider.IDisposable;
import org.eclipse.emf.edit.provider.IEditingDomainItemProvider;
import org.eclipse.emf.edit.provider.IItemLabelProvider;
import org.eclipse.emf.edit.provider.IItemPropertySource;
import org.eclipse.emf.edit.provider.INotifyChangedListener;
import org.eclipse.emf.edit.provider.IStructuredItemContentProvider;
import org.eclipse.emf.edit.provider.ITreeItemContentProvider;
import org.eclipse.sirius.properties.PropertiesFactory;
import org.eclipse.sirius.properties.util.PropertiesAdapterFactory;
import org.eclipse.sirius.viewpoint.description.DescriptionPackage;
import org.eclipse.sirius.viewpoint.description.Group;
import org.eclipse.sirius.viewpoint.description.util.DescriptionSwitch;
import org.eclipse.sirius.viewpoint.description.validation.ValidationPackage;
import org.eclipse.sirius.viewpoint.description.validation.ValidationSet;
import org.eclipse.sirius.viewpoint.description.validation.util.ValidationSwitch;

/**
 * This is the factory that is used to provide the interfaces needed to support
 * Viewers. The adapters generated by this factory convert EMF adapter
 * notifications into calls to {@link #fireNotifyChanged fireNotifyChanged}. The
 * adapters also support Eclipse property sheets. Note that most of the adapters
 * are shared among multiple instances. <!-- begin-user-doc --> <!--
 * end-user-doc -->
 *
 * @generated
 */
public class PropertiesItemProviderAdapterFactory extends PropertiesAdapterFactory implements ComposeableAdapterFactory, IChangeNotifier, IDisposable {
    /**
     * This keeps track of the root adapter factory that delegates to this
     * adapter factory. <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected ComposedAdapterFactory parentAdapterFactory;

    /**
     * This is used to implement
     * {@link org.eclipse.emf.edit.provider.IChangeNotifier}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected IChangeNotifier changeNotifier = new ChangeNotifier();

    /**
     * This keeps track of all the supported types checked by
     * {@link #isFactoryForType isFactoryForType}. <!-- begin-user-doc --> <!--
     * end-user-doc -->
     *
     * @generated
     */
    protected Collection<Object> supportedTypes = new ArrayList<Object>();

    /**
     * This constructs an instance. <!-- begin-user-doc --> <!-- end-user-doc
     * -->
     *
     * @generated
     */
    public PropertiesItemProviderAdapterFactory() {
        supportedTypes.add(IEditingDomainItemProvider.class);
        supportedTypes.add(IStructuredItemContentProvider.class);
        supportedTypes.add(ITreeItemContentProvider.class);
        supportedTypes.add(IItemLabelProvider.class);
        supportedTypes.add(IItemPropertySource.class);
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.ViewExtensionDescription} instances.
     * <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected ViewExtensionDescriptionItemProvider viewExtensionDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.ViewExtensionDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createViewExtensionDescriptionAdapter() {
        if (viewExtensionDescriptionItemProvider == null) {
            viewExtensionDescriptionItemProvider = new ViewExtensionDescriptionItemProvider(this);
        }

        return viewExtensionDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.PageDescription} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected PageDescriptionItemProvider pageDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.PageDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createPageDescriptionAdapter() {
        if (pageDescriptionItemProvider == null) {
            pageDescriptionItemProvider = new PageDescriptionItemProvider(this);
        }

        return pageDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.PageValidationSetDescription}
     * instances. <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected PageValidationSetDescriptionItemProvider pageValidationSetDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.PageValidationSetDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createPageValidationSetDescriptionAdapter() {
        if (pageValidationSetDescriptionItemProvider == null) {
            pageValidationSetDescriptionItemProvider = new PageValidationSetDescriptionItemProvider(this);
        }

        return pageValidationSetDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.GroupDescription} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected GroupDescriptionItemProvider groupDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.GroupDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createGroupDescriptionAdapter() {
        if (groupDescriptionItemProvider == null) {
            groupDescriptionItemProvider = new GroupDescriptionItemProvider(this);
        }

        return groupDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.GroupValidationSetDescription}
     * instances. <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected GroupValidationSetDescriptionItemProvider groupValidationSetDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.GroupValidationSetDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createGroupValidationSetDescriptionAdapter() {
        if (groupValidationSetDescriptionItemProvider == null) {
            groupValidationSetDescriptionItemProvider = new GroupValidationSetDescriptionItemProvider(this);
        }

        return groupValidationSetDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.PropertyValidationRule} instances.
     * <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected PropertyValidationRuleItemProvider propertyValidationRuleItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.PropertyValidationRule}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createPropertyValidationRuleAdapter() {
        if (propertyValidationRuleItemProvider == null) {
            propertyValidationRuleItemProvider = new PropertyValidationRuleItemProvider(this);
        }

        return propertyValidationRuleItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.ContainerDescription} instances.
     * <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected ContainerDescriptionItemProvider containerDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.ContainerDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createContainerDescriptionAdapter() {
        if (containerDescriptionItemProvider == null) {
            containerDescriptionItemProvider = new ContainerDescriptionItemProvider(this);
        }

        return containerDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.TextDescription} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected TextDescriptionItemProvider textDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.TextDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createTextDescriptionAdapter() {
        if (textDescriptionItemProvider == null) {
            textDescriptionItemProvider = new TextDescriptionItemProvider(this);
        }

        return textDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.ButtonDescription} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected ButtonDescriptionItemProvider buttonDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.ButtonDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createButtonDescriptionAdapter() {
        if (buttonDescriptionItemProvider == null) {
            buttonDescriptionItemProvider = new ButtonDescriptionItemProvider(this);
        }

        return buttonDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.LabelDescription} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected LabelDescriptionItemProvider labelDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.LabelDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createLabelDescriptionAdapter() {
        if (labelDescriptionItemProvider == null) {
            labelDescriptionItemProvider = new LabelDescriptionItemProvider(this);
        }

        return labelDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.CheckboxDescription} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected CheckboxDescriptionItemProvider checkboxDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.CheckboxDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createCheckboxDescriptionAdapter() {
        if (checkboxDescriptionItemProvider == null) {
            checkboxDescriptionItemProvider = new CheckboxDescriptionItemProvider(this);
        }

        return checkboxDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.SelectDescription} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected SelectDescriptionItemProvider selectDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.SelectDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createSelectDescriptionAdapter() {
        if (selectDescriptionItemProvider == null) {
            selectDescriptionItemProvider = new SelectDescriptionItemProvider(this);
        }

        return selectDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.DynamicMappingFor} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected DynamicMappingForItemProvider dynamicMappingForItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.DynamicMappingFor}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createDynamicMappingForAdapter() {
        if (dynamicMappingForItemProvider == null) {
            dynamicMappingForItemProvider = new DynamicMappingForItemProvider(this);
        }

        return dynamicMappingForItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.DynamicMappingIf} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected DynamicMappingIfItemProvider dynamicMappingIfItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.DynamicMappingIf}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createDynamicMappingIfAdapter() {
        if (dynamicMappingIfItemProvider == null) {
            dynamicMappingIfItemProvider = new DynamicMappingIfItemProvider(this);
        }

        return dynamicMappingIfItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.TextAreaDescription} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected TextAreaDescriptionItemProvider textAreaDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.TextAreaDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createTextAreaDescriptionAdapter() {
        if (textAreaDescriptionItemProvider == null) {
            textAreaDescriptionItemProvider = new TextAreaDescriptionItemProvider(this);
        }

        return textAreaDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.RadioDescription} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected RadioDescriptionItemProvider radioDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.RadioDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createRadioDescriptionAdapter() {
        if (radioDescriptionItemProvider == null) {
            radioDescriptionItemProvider = new RadioDescriptionItemProvider(this);
        }

        return radioDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.SingleReferenceDescription}
     * instances. <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected SingleReferenceDescriptionItemProvider singleReferenceDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.SingleReferenceDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createSingleReferenceDescriptionAdapter() {
        if (singleReferenceDescriptionItemProvider == null) {
            singleReferenceDescriptionItemProvider = new SingleReferenceDescriptionItemProvider(this);
        }

        return singleReferenceDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.OperationDescription} instances.
     * <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected OperationDescriptionItemProvider operationDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.OperationDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createOperationDescriptionAdapter() {
        if (operationDescriptionItemProvider == null) {
            operationDescriptionItemProvider = new OperationDescriptionItemProvider(this);
        }

        return operationDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.MultipleReferencesDescription}
     * instances. <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected MultipleReferencesDescriptionItemProvider multipleReferencesDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.MultipleReferencesDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createMultipleReferencesDescriptionAdapter() {
        if (multipleReferencesDescriptionItemProvider == null) {
            multipleReferencesDescriptionItemProvider = new MultipleReferencesDescriptionItemProvider(this);
        }

        return multipleReferencesDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.CustomDescription} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected CustomDescriptionItemProvider customDescriptionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.CustomDescription}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createCustomDescriptionAdapter() {
        if (customDescriptionItemProvider == null) {
            customDescriptionItemProvider = new CustomDescriptionItemProvider(this);
        }

        return customDescriptionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.CustomExpression} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected CustomExpressionItemProvider customExpressionItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.CustomExpression}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createCustomExpressionAdapter() {
        if (customExpressionItemProvider == null) {
            customExpressionItemProvider = new CustomExpressionItemProvider(this);
        }

        return customExpressionItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.CustomOperation} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected CustomOperationItemProvider customOperationItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.CustomOperation}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createCustomOperationAdapter() {
        if (customOperationItemProvider == null) {
            customOperationItemProvider = new CustomOperationItemProvider(this);
        }

        return customOperationItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.WidgetStyle} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected WidgetStyleItemProvider widgetStyleItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.WidgetStyle}. <!-- begin-user-doc
     * --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createWidgetStyleAdapter() {
        if (widgetStyleItemProvider == null) {
            widgetStyleItemProvider = new WidgetStyleItemProvider(this);
        }

        return widgetStyleItemProvider;
    }

    /**
     * This keeps track of the one adapter used for all
     * {@link org.eclipse.sirius.properties.TextStyle} instances. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    protected TextStyleItemProvider textStyleItemProvider;

    /**
     * This creates an adapter for a
     * {@link org.eclipse.sirius.properties.TextStyle}. <!-- begin-user-doc -->
     * <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter createTextStyleAdapter() {
        if (textStyleItemProvider == null) {
            textStyleItemProvider = new TextStyleItemProvider(this);
        }

        return textStyleItemProvider;
    }

    /**
     * This returns the root adapter factory that contains this factory. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public ComposeableAdapterFactory getRootAdapterFactory() {
        return parentAdapterFactory == null ? this : parentAdapterFactory.getRootAdapterFactory();
    }

    /**
     * This sets the composed adapter factory that contains this factory. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public void setParentAdapterFactory(ComposedAdapterFactory parentAdapterFactory) {
        this.parentAdapterFactory = parentAdapterFactory;
    }

    /**
     * <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public boolean isFactoryForType(Object type) {
        return supportedTypes.contains(type) || super.isFactoryForType(type);
    }

    /**
     * This implementation substitutes the factory itself as the key for the
     * adapter. <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Adapter adapt(Notifier notifier, Object type) {
        return super.adapt(notifier, this);
    }

    /**
     * <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public Object adapt(Object object, Object type) {
        if (isFactoryForType(type)) {
            Object adapter = super.adapt(object, type);
            if (!(type instanceof Class<?>) || (((Class<?>) type).isInstance(adapter))) {
                return adapter;
            }
        }

        return null;
    }

    /**
     * This adds a listener. <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public void addListener(INotifyChangedListener notifyChangedListener) {
        changeNotifier.addListener(notifyChangedListener);
    }

    /**
     * This removes a listener. <!-- begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public void removeListener(INotifyChangedListener notifyChangedListener) {
        changeNotifier.removeListener(notifyChangedListener);
    }

    /**
     * This delegates to {@link #changeNotifier} and to
     * {@link #parentAdapterFactory}. <!-- begin-user-doc --> <!-- end-user-doc
     * -->
     *
     * @generated
     */
    @Override
    public void fireNotifyChanged(Notification notification) {
        changeNotifier.fireNotifyChanged(notification);

        if (parentAdapterFactory != null) {
            parentAdapterFactory.fireNotifyChanged(notification);
        }
    }

    /**
     * This disposes all of the item providers created by this factory. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    @Override
    public void dispose() {
        if (viewExtensionDescriptionItemProvider != null) {
            viewExtensionDescriptionItemProvider.dispose();
        }
        if (pageDescriptionItemProvider != null) {
            pageDescriptionItemProvider.dispose();
        }
        if (pageValidationSetDescriptionItemProvider != null) {
            pageValidationSetDescriptionItemProvider.dispose();
        }
        if (propertyValidationRuleItemProvider != null) {
            propertyValidationRuleItemProvider.dispose();
        }
        if (groupDescriptionItemProvider != null) {
            groupDescriptionItemProvider.dispose();
        }
        if (groupValidationSetDescriptionItemProvider != null) {
            groupValidationSetDescriptionItemProvider.dispose();
        }
        if (containerDescriptionItemProvider != null) {
            containerDescriptionItemProvider.dispose();
        }
        if (textDescriptionItemProvider != null) {
            textDescriptionItemProvider.dispose();
        }
        if (buttonDescriptionItemProvider != null) {
            buttonDescriptionItemProvider.dispose();
        }
        if (labelDescriptionItemProvider != null) {
            labelDescriptionItemProvider.dispose();
        }
        if (checkboxDescriptionItemProvider != null) {
            checkboxDescriptionItemProvider.dispose();
        }
        if (selectDescriptionItemProvider != null) {
            selectDescriptionItemProvider.dispose();
        }
        if (dynamicMappingForItemProvider != null) {
            dynamicMappingForItemProvider.dispose();
        }
        if (dynamicMappingIfItemProvider != null) {
            dynamicMappingIfItemProvider.dispose();
        }
        if (textAreaDescriptionItemProvider != null) {
            textAreaDescriptionItemProvider.dispose();
        }
        if (radioDescriptionItemProvider != null) {
            radioDescriptionItemProvider.dispose();
        }
        if (singleReferenceDescriptionItemProvider != null) {
            singleReferenceDescriptionItemProvider.dispose();
        }
        if (operationDescriptionItemProvider != null) {
            operationDescriptionItemProvider.dispose();
        }
        if (multipleReferencesDescriptionItemProvider != null) {
            multipleReferencesDescriptionItemProvider.dispose();
        }
        if (customDescriptionItemProvider != null) {
            customDescriptionItemProvider.dispose();
        }
        if (customExpressionItemProvider != null) {
            customExpressionItemProvider.dispose();
        }
        if (customOperationItemProvider != null) {
            customOperationItemProvider.dispose();
        }
        if (widgetStyleItemProvider != null) {
            widgetStyleItemProvider.dispose();
        }
        if (textStyleItemProvider != null) {
            textStyleItemProvider.dispose();
        }
    }

    /**
     * A child creation extender for the {@link DescriptionPackage}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    public static class DescriptionChildCreationExtender implements IChildCreationExtender {
        /**
         * The switch for creating child descriptors specific to each extended
         * class. <!-- begin-user-doc --> <!-- end-user-doc -->
         *
         * @generated
         */
        protected static class CreationSwitch extends DescriptionSwitch<Object> {
            /**
             * The child descriptors being populated. <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             *
             * @generated
             */
            protected List<Object> newChildDescriptors;

            /**
             * The domain in which to create the children. <!-- begin-user-doc
             * --> <!-- end-user-doc -->
             *
             * @generated
             */
            protected EditingDomain editingDomain;

            /**
             * Creates the a switch for populating child descriptors in the
             * given domain. <!-- begin-user-doc --> <!-- end-user-doc -->
             *
             * @generated
             */
            CreationSwitch(List<Object> newChildDescriptors, EditingDomain editingDomain) {
                this.newChildDescriptors = newChildDescriptors;
                this.editingDomain = editingDomain;
            }

            /**
             * <!-- begin-user-doc --> <!-- end-user-doc -->
             *
             * @generated
             */
            @Override
            public Object caseGroup(Group object) {
                newChildDescriptors.add(createChildParameter(DescriptionPackage.Literals.GROUP__EXTENSIONS, PropertiesFactory.eINSTANCE.createViewExtensionDescription()));

                return null;
            }

            /**
             * <!-- begin-user-doc --> <!-- end-user-doc -->
             *
             * @generated
             */
            protected CommandParameter createChildParameter(Object feature, Object child) {
                return new CommandParameter(null, feature, child);
            }

        }

        /**
         * <!-- begin-user-doc --> <!-- end-user-doc -->
         *
         * @generated
         */
        @Override
        public Collection<Object> getNewChildDescriptors(Object object, EditingDomain editingDomain) {
            ArrayList<Object> result = new ArrayList<Object>();
            new CreationSwitch(result, editingDomain).doSwitch((EObject) object);
            return result;
        }

        /**
         * <!-- begin-user-doc --> <!-- end-user-doc -->
         *
         * @generated
         */
        @Override
        public ResourceLocator getResourceLocator() {
            return PropertiesEditPlugin.INSTANCE;
        }
    }

    /**
     * A child creation extender for the {@link ValidationPackage}. <!--
     * begin-user-doc --> <!-- end-user-doc -->
     *
     * @generated
     */
    public static class ValidationChildCreationExtender implements IChildCreationExtender {
        /**
         * The switch for creating child descriptors specific to each extended
         * class. <!-- begin-user-doc --> <!-- end-user-doc -->
         *
         * @generated
         */
        protected static class CreationSwitch extends ValidationSwitch<Object> {
            /**
             * The child descriptors being populated. <!-- begin-user-doc -->
             * <!-- end-user-doc -->
             *
             * @generated
             */
            protected List<Object> newChildDescriptors;

            /**
             * The domain in which to create the children. <!-- begin-user-doc
             * --> <!-- end-user-doc -->
             *
             * @generated
             */
            protected EditingDomain editingDomain;

            /**
             * Creates the a switch for populating child descriptors in the
             * given domain. <!-- begin-user-doc --> <!-- end-user-doc -->
             *
             * @generated
             */
            CreationSwitch(List<Object> newChildDescriptors, EditingDomain editingDomain) {
                this.newChildDescriptors = newChildDescriptors;
                this.editingDomain = editingDomain;
            }

            /**
             * <!-- begin-user-doc --> <!-- end-user-doc -->
             *
             * @generated
             */
            @Override
            public Object caseValidationSet(ValidationSet object) {
                newChildDescriptors.add(createChildParameter(ValidationPackage.Literals.VALIDATION_SET__OWNED_RULES, PropertiesFactory.eINSTANCE.createPropertyValidationRule()));

                return null;
            }

            /**
             * <!-- begin-user-doc --> <!-- end-user-doc -->
             *
             * @generated
             */
            protected CommandParameter createChildParameter(Object feature, Object child) {
                return new CommandParameter(null, feature, child);
            }

        }

        /**
         * <!-- begin-user-doc --> <!-- end-user-doc -->
         *
         * @generated
         */
        @Override
        public Collection<Object> getNewChildDescriptors(Object object, EditingDomain editingDomain) {
            ArrayList<Object> result = new ArrayList<Object>();
            new CreationSwitch(result, editingDomain).doSwitch((EObject) object);
            return result;
        }

        /**
         * <!-- begin-user-doc --> <!-- end-user-doc -->
         *
         * @generated
         */
        @Override
        public ResourceLocator getResourceLocator() {
            return PropertiesEditPlugin.INSTANCE;
        }
    }

}
