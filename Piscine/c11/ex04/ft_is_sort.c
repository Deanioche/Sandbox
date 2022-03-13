/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_is_sort.c                                       :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/30 17:29:26 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/30 17:29:29 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

int	ft_is_sort(int *tab, int length, int(*f)(int, int))
{
	int		i;
	int		asc;
	int		des;

	i = 0;
	asc = 0;
	des = 0;
	while (i < length - 1)
	{
		if (f(tab[i], tab[i + 1]) >= 0)
			des++;
		if (f(tab[i], tab[i + 1]) <= 0)
			asc++;
		i++;
	}
	if (asc == i || des == i)
		return (1);
	return (0);
}
