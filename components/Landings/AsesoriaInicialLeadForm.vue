<script setup>
const formData = ref({
  name: '',
  email: '',
  phone: '',
  area: '',
  caseDescription: '',
});

const errors = ref({
  name: null,
  email: null,
  phone: null,
  area: null,
});

const areaOptions = [
  'Fraude Bancario',
  'Sucesiones',
  'Planificación Patrimonial',
  'Civil',
  'Otro tema legal',
];

const emailOk = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const validateField = (field) => {
  const value = formData.value[field];
  errors.value[field] = null;

  if (field === 'name') {
    if (!value.trim()) errors.value.name = 'Este campo es obligatorio.';
    else if (value.trim().length < 2) errors.value.name = 'Debe tener al menos 2 caracteres.';
  }

  if (field === 'email') {
    if (!value.trim()) errors.value.email = 'Este campo es obligatorio.';
    else if (!emailOk(value.trim())) errors.value.email = 'Formato de correo inválido.';
  }

  if (field === 'phone') {
    const digits = value.replace(/\s+/g, '');
    if (!digits) errors.value.phone = 'Este campo es obligatorio.';
    else if (!/^\d{10}$/.test(digits)) errors.value.phone = 'Ingrese 10 dígitos (Colombia).';
  }

  if (field === 'area') {
    if (!value) errors.value.area = 'Seleccione un área de consulta.';
  }
};

const validateAll = () => {
  validateField('name');
  validateField('email');
  validateField('phone');
  validateField('area');
  return Object.values(errors.value).every((e) => e === null);
};

const serverError = ref(null);
const isSubmitting = ref(false);

const submitLead = async () => {
  serverError.value = null;
  if (!validateAll()) return;

  isSubmitting.value = true;
  try {
    await $fetch('/api/marketing/asesoria-inicial-lead', {
      method: 'POST',
      body: {
        name: formData.value.name.trim(),
        email: formData.value.email.trim(),
        phone: formData.value.phone.replace(/\s+/g, ''),
        area: formData.value.area,
        caseDescription: formData.value.caseDescription.trim(),
      },
    });

    await navigateTo('/thankyou/asesoria-inicial', { replace: true });
  } catch (error) {
    serverError.value =
      error?.data?.message ||
      'Hubo un error al enviar su consulta. Intente de nuevo.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <form class="w-full flex flex-col gap-5" @submit.prevent="submitLead" novalidate>
    <p
      v-if="serverError"
      class="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
      role="alert"
    >
      {{ serverError }}
    </p>

    <div class="flex flex-col gap-1.5">
      <label for="ai-name" class="text-sm font-semibold text-ink">Nombre completo</label>
      <input
        id="ai-name"
        v-model="formData.name"
        type="text"
        autocomplete="name"
        placeholder="Escriba su nombre completo"
        class="w-full rounded-lg border border-line bg-surface-elevated px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent"
        @blur="validateField('name')"
      >
      <p v-if="errors.name" class="text-sm text-red-700">{{ errors.name }}</p>
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="ai-email" class="text-sm font-semibold text-ink">Correo electrónico</label>
      <input
        id="ai-email"
        v-model="formData.email"
        type="email"
        autocomplete="email"
        placeholder="nombre@correo.com"
        class="w-full rounded-lg border border-line bg-surface-elevated px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent"
        @blur="validateField('email')"
      >
      <p v-if="errors.email" class="text-sm text-red-700">{{ errors.email }}</p>
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="ai-phone" class="text-sm font-semibold text-ink">WhatsApp</label>
      <div class="flex gap-2">
        <span class="inline-flex items-center rounded-lg border border-line bg-surface px-3 text-sm font-medium text-ink-muted">+57</span>
        <input
          id="ai-phone"
          v-model="formData.phone"
          type="tel"
          inputmode="numeric"
          autocomplete="tel-national"
          placeholder="3XX XXX XXXX"
          class="w-full rounded-lg border border-line bg-surface-elevated px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent"
          @blur="validateField('phone')"
        >
      </div>
      <p v-if="errors.phone" class="text-sm text-red-700">{{ errors.phone }}</p>
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="ai-area" class="text-sm font-semibold text-ink">Área de consulta</label>
      <select
        id="ai-area"
        v-model="formData.area"
        class="w-full rounded-lg border border-line bg-surface-elevated px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent"
        @change="validateField('area')"
      >
        <option disabled value="">Seleccione un área</option>
        <option v-for="option in areaOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
      <p v-if="errors.area" class="text-sm text-red-700">{{ errors.area }}</p>
    </div>

    <div class="flex flex-col gap-1.5">
      <label for="ai-case" class="text-sm font-semibold text-ink">
        Descripción del caso
        <span class="font-normal text-ink-muted">(opcional)</span>
      </label>
      <textarea
        id="ai-case"
        v-model="formData.caseDescription"
        rows="4"
        placeholder="Cuéntenos brevemente qué le sucedió o en qué necesita ayuda"
        class="w-full rounded-lg border border-line bg-surface-elevated px-4 py-3 text-ink placeholder:text-ink-muted/70 focus:outline-none focus:ring-2 focus:ring-action focus:border-transparent resize-y"
      />
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="inline-flex items-center justify-center px-8 py-4 bg-action text-white font-semibold rounded-lg hover:bg-action-hover transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {{ isSubmitting ? 'Enviando…' : 'Enviar mi consulta' }}
    </button>
  </form>
</template>
