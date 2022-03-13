/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_atoi_base.c                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/23 17:12:29 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/23 17:54:06 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_strlen(char *str)
{
	int		i;

	i = 0;
	while (str[i] != '\0')
		i++;
	return (i);
}

int	is_valid(char*base)
{
	int		len;
	int		i;
	int		j;

	len = ft_strlen(base);
	if (len < 2)
		return (1);
	i = 0;
	while (base[i] != '\0')
	{
		if ((base[i] >= 9 && base[i] <= 13) || base[i] == 32)
			return (1);
		if (base[i] == '+' || base[i] == '-')
			return (1);
		j = i + 1;
		while (base[j] != '\0')
		{
			if (base[i] == base[j])
				return (1);
			j++;
		}
		i++;
	}
	return (0);
}

char	*get_base_idx(char ch, char *base)
{
	int		i;

	i = 0;
	while (base[i])
	{
		if (ch == base[i])
			return (base + i);
		i++;
	}
	return (0);
}

int	ft_atoi_base(char *str, char *base)
{
	int		isN;
	int		res;
	int		i;

	if (is_valid(base))
		return (0);
	isN = 1;
	res = 0;
	i = 0;
	while ((str[i] >= 9 && str[i] <= 13) || str[i] == ' ')
		i++;
	while (str[i] == '-' || str[i] == '+')
	{
		if (str[i] == '-')
			isN *= -1;
		i++;
	}
	while (get_base_idx(str[i], base))
	{
		res *= ft_strlen(base);
		res += (get_base_idx(str[i], base) - base);
		i++;
	}
	return (res * isN);
}
