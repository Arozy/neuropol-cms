import type { Schema, Attribute } from '@strapi/strapi';

export interface StepsSteps extends Schema.Component {
  collectionName: 'components_steps_steps';
  info: {
    displayName: 'steps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    step: Attribute.Component<'steps.step-item'>;
  };
}

export interface StepsStepItem extends Schema.Component {
  collectionName: 'components_steps_step_items';
  info: {
    displayName: 'step-item';
  };
  attributes: {
    icon: Attribute.String & Attribute.Required & Attribute.Unique;
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface StaticElementsServices extends Schema.Component {
  collectionName: 'components_static_elements_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    item: Attribute.Component<'about-items.about-items', true> &
      Attribute.Required;
  };
}

export interface StaticElementsFooter extends Schema.Component {
  collectionName: 'components_static_elements_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    socials: Attribute.Component<'footer-elements.footer-elements'> &
      Attribute.Required;
    quick_links: Attribute.Component<'footer-elements.quick-links-column'> &
      Attribute.Required;
    open_hours: Attribute.Component<'footer-elements.opening-hours-column'> &
      Attribute.Required;
  };
}

export interface StaffStaff extends Schema.Component {
  collectionName: 'components_staff_staff';
  info: {
    displayName: 'staff';
    icon: 'user';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    items: Attribute.Component<'staff.staff-items', true> & Attribute.Required;
  };
}

export interface StaffStaffItems extends Schema.Component {
  collectionName: 'components_staff_staff_items';
  info: {
    displayName: 'staff-items';
    icon: 'user';
  };
  attributes: {
    photo: Attribute.Media<'images'>;
    degree: Attribute.Enumeration<
      ['Lic.', 'Mgr', 'Lekarz', 'Dr n. med.', 'Dr hab. n. med.', 'Prof.']
    >;
    name: Attribute.String & Attribute.Required;
    position: Attribute.Enumeration<
      ['Fizjoterapeuta', 'Neurologopeda', 'Terapeuta', 'Lekarz']
    > &
      Attribute.Required;
    description: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 260;
      }>;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
    icon: 'picture';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    primary: Attribute.Component<'button.buttons'>;
    secondary: Attribute.Component<'button.buttons'>;
    image: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface FooterElementsQuickLinksColumn extends Schema.Component {
  collectionName: 'components_footer_elements_quick_links_columns';
  info: {
    displayName: 'quick-links-column';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    quick_link: Attribute.Component<'footer-elements.quick-link', true> &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          max: 10;
        },
        number
      >;
  };
}

export interface FooterElementsQuickLink extends Schema.Component {
  collectionName: 'components_footer_elements_quick_links';
  info: {
    displayName: 'quick-link';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 22;
      }>;
    action: Attribute.String & Attribute.Required;
  };
}

export interface FooterElementsOpeningHoursColumn extends Schema.Component {
  collectionName: 'components_footer_elements_opening_hours_columns';
  info: {
    displayName: 'opening-hours-column';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    Description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    work_day: Attribute.String & Attribute.Required;
    weekend: Attribute.String & Attribute.Required;
    bank_holiday: Attribute.String & Attribute.Required;
  };
}

export interface FooterElementsFooterElements extends Schema.Component {
  collectionName: 'components_footer_elements_footer_elements';
  info: {
    displayName: 'footer-elements';
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
    media_button: Attribute.Component<'button.buttons', true>;
    icon: Attribute.String & Attribute.Required;
    action: Attribute.String & Attribute.Required;
  };
}

export interface FooterElementsColumns extends Schema.Component {
  collectionName: 'components_footer_elements_columns';
  info: {
    displayName: 'columns';
  };
  attributes: {
    title: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 20;
      }>;
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
      }>;
  };
}

export interface CtasCtaBanner extends Schema.Component {
  collectionName: 'components_ctas_cta_banners';
  info: {
    displayName: 'CTA-banner';
    icon: 'cursor';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 180;
      }>;
    left: Attribute.Component<'button.buttons'>;
    right: Attribute.Component<'button.buttons'>;
  };
}

export interface CardsCard extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'Card';
    icon: 'folder';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        maxLength: 16;
      }>;
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 40;
        maxLength: 140;
      }>;
    cta: Attribute.Component<'button.buttons'>;
    icon: Attribute.String;
  };
}

export interface ButtonPrimaryButton extends Schema.Component {
  collectionName: 'components_button_primary_buttons';
  info: {
    displayName: 'primary-button';
    icon: 'bell';
    description: '';
  };
  attributes: {
    primary_button: Attribute.Component<'button.buttons'>;
  };
}

export interface ButtonButtons extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'buttons';
    description: '';
  };
  attributes: {
    text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 30;
        maxLength: 90;
      }> &
      Attribute.DefaultTo<'Sprawd\u017A teraz'>;
    action: Attribute.String & Attribute.Required;
  };
}

export interface AboutItemsAboutItems extends Schema.Component {
  collectionName: 'components_about_items_about_items';
  info: {
    displayName: 'about-items';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    Description: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'steps.steps': StepsSteps;
      'steps.step-item': StepsStepItem;
      'static-elements.services': StaticElementsServices;
      'static-elements.footer': StaticElementsFooter;
      'staff.staff': StaffStaff;
      'staff.staff-items': StaffStaffItems;
      'header.header': HeaderHeader;
      'footer-elements.quick-links-column': FooterElementsQuickLinksColumn;
      'footer-elements.quick-link': FooterElementsQuickLink;
      'footer-elements.opening-hours-column': FooterElementsOpeningHoursColumn;
      'footer-elements.footer-elements': FooterElementsFooterElements;
      'footer-elements.columns': FooterElementsColumns;
      'ctas.cta-banner': CtasCtaBanner;
      'cards.card': CardsCard;
      'button.primary-button': ButtonPrimaryButton;
      'button.buttons': ButtonButtons;
      'about-items.about-items': AboutItemsAboutItems;
    }
  }
}
